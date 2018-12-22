const Discord = require("discord.js")
const superagent = require("superagent");
const talkedRecently = new Set();


module.exports.run = async (bot, message, args) => {

      if (talkedRecently.has(message.author.id)) {
            message.channel.send("Wait 30 secs before getting typing this again. - " + message.author);
    } else {

if (args.join(" ") == "") {
        message.reply("😢 You can't tickle a ghost!");
        return;
    } else {    
    let user = message.mentions.members.first();

    let {body} = await superagent
    .get(`https://nekos.life/api/v2/img/tickle`);
  
    let hentaiEmbed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setTitle("Tickle!")
    .setDescription(message.author.toString() + " tickles " + user )
    .setImage(body.url)
    .setFooter("Bot Version: 0.0.3");

    message.channel.send(hentaiEmbed)
}

}

        talkedRecently.add(message.author.id);
        setTimeout(() => {
          // Removes the user from the set after a minute
          talkedRecently.delete(message.author.id);
        }, 30000);
    }

module.exports.config = {
  name: "tickle",
  category: "actions",
  description: "tickle",
  usage: "tickle",
  aliases: ["tickles"]
};