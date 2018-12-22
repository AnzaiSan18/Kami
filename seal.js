const Discord = require("discord.js")
const superagent = require("superagent");
const talkedRecently = new Set();

module.exports.run = async (bot, message, args) => {

   
let user = message.mentions.members.first();   
let hug = [
    "https://i.imgur.com/nmYqoud.gif",
    "https://i.imgur.com/zJj2yhp.gif",
    "https://media0.giphy.com/media/adM1FEGALvsLS/giphy.gif?cid=3640f6095c0f48e661616a6c36e90f3b",
    "https://media.giphy.com/media/YbSoFTvOVgB9K/giphy.gif",
    "https://media.giphy.com/media/jVFR8nAAdRqPm/giphy.gif",
    "https://thumbs.gfycat.com/MealyAnguishedCaterpillar-small.gif",
    "https://media.giphy.com/media/ViMRJ1n5IpjFK/giphy.gif"
]

    var hugg = message.content.substring(6);
    
    const embedhug = new Discord.RichEmbed()
    .setColor("#09e284")
    .setDescription("Heres a seal!")
    .setImage(hug[Math.floor(Math.random() * hug.length)])
    message.channel.send(embedhug)
}

module.exports.config = {
  name: "seal",
  category: "random",
  description: "Seal",
  usage: "seal",
  aliases: ["seallllllsssss"]
};