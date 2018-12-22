const Discord = require("discord.js");
const superagent = require("superagent");
const talkedRecently = new Set();
module.exports.run = async (bot, message, args) => {
      if (talkedRecently.has(message.author.id)) {
            message.channel.send("Wait 30 secs before getting typing this again. - " + message.author);
    } else {

    let {body} = await superagent
    .get(`https://random.dog/woof.json`);

    let dogembed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setTitle("Doggo :dog:")
        .setImage(body.url);

    message.channel.send(dogembed);

}

        talkedRecently.add(message.author.id);
        setTimeout(() => {
          // Removes the user from the set after a minute
          talkedRecently.delete(message.author.id);
        }, 30000);
    }

module.exports.config = {
  name: "doggy",
  category: "random",
  description: "dog",
  usage: "doggy",
  aliases: ["doggo", "dog"]
};