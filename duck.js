const Discord = require("discord.js")
const superagent = require("superagent");
const talkedRecently = new Set();

module.exports.run = async (bot, message, args) => {

   
let user = message.mentions.members.first();   
let hug = [
"https://66.media.tumblr.com/d23b68f614e52ab2b86fb90bd3bc4573/tumblr_nbxsbl9FTR1svxaato1_250.gif",
"https://66.media.tumblr.com/fe3baac69def96ae4704c4c22b59c54b/tumblr_mn8734ebRM1qbxi45o2_400.gif",
"https://66.media.tumblr.com/7724bb0ee9d7993ff4695107744b58b4/tumblr_nvbicg4XBr1tutytzo1_250.gif",
"https://66.media.tumblr.com/67d16bbbd0e280e964d85a402558fe1f/tumblr_nvbicg4XBr1tutytzo2_250.gif",
"https://66.media.tumblr.com/5e1f2bebe51006e925b6dca634d067d0/tumblr_mw2gcmoUbG1rard7fo1_400.gif",
"https://66.media.tumblr.com/b1a628b9e2ac9b7215586df95b9b8a98/tumblr_mhny18ttQZ1rswb5ko1_500.gif"
]

    var hugg = message.content.substring(6);
    
    const embedhug = new Discord.RichEmbed()
    .setColor("#09e284")
    .setDescription("Heres a duck!")
    .setImage(hug[Math.floor(Math.random() * hug.length)])
    message.channel.send(embedhug)
}

module.exports.config = {
  name: "duck",
  category: "random",
  description: "duck",
  usage: "duck",
  aliases: ["duckies"]
};