const Discord = require("discord.js")
const superagent = require("superagent");
const talkedRecently = new Set();
module.exports.run = async (bot, message, args) => {
      if (talkedRecently.has(message.author.id)) {
            message.channel.send("Wait 30 secs before getting typing this again. - " + message.author);
    } else {
   let whips = [
"https://images.sex.com/images/pinporn/2014/05/19/300/6079985.gif",
"https://images.sex.com/images/pinporn/2014/04/22/300/5712356.gif",
"https://images.sex.com/images/pinporn/2016/01/12/300/14760032.gif",
"https://images.sex.com/images/pinporn/2015/12/16/300/14551816.gif",
"https://images.sex.com/images/pinporn/2018/11/26/300/20267934.gif",
"https://images.sex.com/images/pinporn/2018/11/26/300/20267771.gif",
"https://images.sex.com/images/pinporn/2018/11/25/300/20263811.gif",
"https://images.sex.com/images/pinporn/2018/12/05/300/20311506.gif",
"https://images.sex.com/images/pinporn/2018/12/01/300/20292797.gif",
"https://images.sex.com/images/pinporn/2018/11/22/300/20252720.gif",
"https://images.sex.com/images/pinporn/2018/12/04/300/20304328.gif"   
];

var whip = message.content.substring(6);

const notwhipembed = new Discord.RichEmbed()
.setTitle("This channel is not marked as NSFW!")
.setColor("#FF69B4");

const spankembed = new Discord.RichEmbed()
.setColor("#FF69B4")
.setDescription(message.author.toString() + " fucks " + whip)
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
    name: "fuck",
    description: "fuck",
    usage: "!fuck",
    category: "NSFW",
    aliases: ["Fuck"]
}