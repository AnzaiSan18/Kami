const Discord = require("discord.js")
const superagent = require("superagent");
const talkedRecently = new Set();

module.exports.run = async (bot, message, args) => {

   
let user = message.mentions.members.first();   
let hug = [
"https://i.imgur.com/AFQlVnZ.gif",
"https://i.imgur.com/N7J5BZh.gif",
"https://i.imgur.com/PtKtM9s.jpg",
"https://i.imgur.com/X6BK1FT.jpg",
"https://i.gifer.com/BuRD.gif",
"https://data.whicdn.com/images/313721504/original.gif",
"https://vignette.wikia.nocookie.net/howtotrainyourdragon/images/f/fd/Toothless_Smiling_2.gif/revision/latest?cb=20170130003307",
"https://pic.funnygifsbox.com/uploads/2016/06/funnygifsbox.com_2016-06-18_18-29-05.gif",
"https://thumbs.gfycat.com/ImperturbableTiredCornsnake-size_restricted.gif",
"https://i.gifer.com/JtdB.gif",
"https://i.gifer.com/C3ki.gif"
]

    var hugg = message.content.substring(6);
    
    const embedhug = new Discord.RichEmbed()
    .setColor("#09e284")
    .setDescription("Heres a dragon!")
    .setImage(hug[Math.floor(Math.random() * hug.length)])
    message.channel.send(embedhug)
}

module.exports.config = {
  name: "dragon",
  category: "random",
  description: "dragon",
  usage: "dragon",
  aliases: ["dragonies"]
};