const Discord = require("discord.js")
const weather = require("weather-js");
const talkedRecently = new Set();
module.exports.run = async (bot, message, args) => {
      if (talkedRecently.has(message.author.id)) {
            message.channel.send("Wait 30 secs before getting typing this again. - " + message.author);
    } else {
      weather.find({search: args.join(" "), degreeType: 'C'}, function(err, result) { 
      if (result === undefined || result.length === 0) {
          message.channel.send('**Please enter a valid location.**')
          return; 
          }
    
          const current = result[0].current; 
          const location = result[0].location; 
          const wembed = new Discord.RichEmbed()
              .setDescription(`**${current.skytext}**`) 
              .setAuthor(`Weather for ${current.observationpoint}`) 
              .setThumbnail(current.imageUrl) 
              .setColor("#003593") 
              .addField('Timezone',`UTC${location.timezone}`, true) 
              .addField('Degree Type',location.degreetype, true)
              .addField('Temperature',`${current.temperature} Degrees`, true)
              .addField('Feels Like', `${current.feelslike} Degrees`, true)
              .addField('Winds',current.winddisplay, true)
              .addField('Humidity', `${current.humidity}%`, true)
    
              message.channel.send(wembed)
      .catch();
    });
}

        talkedRecently.add(message.author.id);
        setTimeout(() => {
          // Removes the user from the set after a minute
          talkedRecently.delete(message.author.id);
        }, 30000);
    }

module.exports.config = {
    name: "weather",
    description: "Weather",
    usage: "!weather (location)",
    category: "random",
    aliases: ["wea", "weath"]
}