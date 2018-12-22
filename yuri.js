const Discord = require("discord.js")
const superagent = require("superagent");
const talkedRecently = new Set();

module.exports.run = async (bot, message, args) => {
      if (talkedRecently.has(message.author.id)) {
            message.channel.send("Wait 30 secs before getting typing this again. - " + message.author);
    } else {

    let {body} = await superagent
    .get(`https://nekos.life/api/v2/img/yuri`);
    if (!message.channel.nsfw) return message.reply("** You must be in a N.S.F.W channel to use this command.**");
  
    let hentaiEmbed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setTitle("Hentai is art.")
    .setImage(body.url)
    .setColor("RANDOM")
    .setFooter("Bot Version: 0.0.3");

    message.channel.send(hentaiEmbed)
}

        talkedRecently.add(message.author.id);
        setTimeout(() => {
          // Removes the user from the set after a minute
          talkedRecently.delete(message.author.id);
        }, 30000);
    }

module.exports.config = {
    name: "yuri",
    description: "Hentai",
    usage: "!hentai",
    category: "hentai",
    aliases: ["hen"]
}
