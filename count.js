const Discord = require("discord.js")
const superagent = require("superagent");
const ownerID = "330985766668992512";

module.exports.run = async (bot, message, args) => {

if (message.author.id !== ownerID) return message.channel.send("You are not authorized to use this command.");

  message.channel.send(`Server counted: **${bot.guilds.size} **`)
  message.react("✅");
  }


module.exports.config = {
  name: "count",
  category: "owner",
  description: "count",
  usage: "count",
  aliases: ["server"]
};
