const Discord = require('discord.js')
const talkedRecently = new Set();
const osu = require('node-osu');
const api = new osu.Api("dc445594b9e747ed87d9a98b280b526317bc34ff" , {
    notFoundAsError: true,
    completeScores: false 
})

module.exports.run = async (bot, message, args) => { 

      if (talkedRecently.has(message.author.id)) {
            message.channel.send("Wait 30 secs before getting typing this again. - " + message.author);
    } else {

  
  let username = args[0]
  
  
  if (!args[0]) return message.channel.send('Please, provide a valid user\'s nickname! (osu!)')
  
api.getUser({u: username}).then(user => {
  const embed = new Discord.RichEmbed()
  .setTitle('User Osu Search System')
  .setDescription(`using with node-osu module`)
  .setThumbnail(`http://s.ppy.sh/a/${user.id}}`)
  .setColor("#D0436A")
  .addField('Nickname', user.name, true)
  .addField('PP', Math.round(user.pp.raw), true)
  .addField('Rank', user.pp.rank, true)
  .addField('Level', Math.round(user.level), true)
  .addBlankField()
  .addField('Country', user.country, true)
  .addField('Country Rank', user.pp.countryRank, true)
  .addField('Playcount', user.counts.plays, true)
  .addField('Accuracy', `${user.accuracyFormatted}`, true)
  .setFooter('Requested By ' + message.author.tag, message.author.avatarURL)
  message.channel.send(embed)
  
})

}

        talkedRecently.add(message.author.id);
        setTimeout(() => {
          // Removes the user from the set after a minute
          talkedRecently.delete(message.author.id);
        }, 30000);
    }

module.exports.config = {
  name: "osu",
  category: "util",
  description: "OSU! profile",
  usage: "osu",
  aliases: ["osu"]
};