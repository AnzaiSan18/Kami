const Discord = require("discord.js")
const superagent = require("superagent");
const talkedRecently = new Set();
module.exports.run = async (bot, message, args) => {
      if (talkedRecently.has(message.author.id)) {
            message.channel.send("Wait 30 secs before getting typing this again. - " + message.author);
    } else {
   let whips = [
     "https://images.sex.com/images/pinporn/2014/07/02/620/6731976.gif",
     "https://images.sex.com/images/pinporn/2015/09/18/300/13815586.gif",
     "https://images.sex.com/images/pinporn/2015/12/07/300/14483240.gif",
     "https://images.sex.com/images/pinporn/2016/09/25/300/16608497.gif",
     "https://images.sex.com/images/pinporn/2017/09/11/300/18341572.gif",
     "https://images.sex.com/images/pinporn/2017/09/12/300/18347235.gif",
     "https://images.sex.com/images/pinporn/2015/09/09/300/13747508.gif",
     "https://images.sex.com/images/pinporn/2018/06/23/300/19636550.gif"     
];

var whip = message.content.substring(5);

const notwhipembed = new Discord.RichEmbed()
.setTitle("This channel is not marked as NSFW!")
.setColor("#FF69B4");

const spankembed = new Discord.RichEmbed()
.setTitle(" Bad! ")
.setColor("#FF69B4")
.setDescription(message.author.toString() + " whips " + whip)
.setImage(whips[Math.floor(Math.random() * whips.length)])
message.delete().catch();
if (message.channel.nsfw) message.channel.send(spankembed)
else message.channel.send(notwhipembed)
}

        talkedRecently.add(message.author.id);
        setTimeout(() => {
          // Removes the user from the set after a minute
          talkedRecently.delete(message.author.id);
        }, 30000);
    }

module.exports.config = {
    name: "whip",
    description: "Whip",
    usage: "!whip",
    category: "NSFW",
    aliases: ["Whip"]
}