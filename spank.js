const Discord = require("discord.js")
const superagent = require("superagent");
const talkedRecently = new Set();
module.exports.run = async (bot, message, args) => {
      if (talkedRecently.has(message.author.id)) {
            message.channel.send("Wait 30 secs before getting typing this again. - " + message.author);
    } else {
   let spanks = [
        "https://media1.giphy.com/media/6BZaFXBVPBtok/200w.webp",
        "https://images.sex.com/images/pinporn/2015/08/07/300/13441590.gif",
        "https://images.sex.com/images/pinporn/2015/05/19/300/11991195.gif",
        "https://images.sex.com/images/pinporn/2017/03/05/300/17444239.gif",
        "https://images.sex.com/images/pinporn/2016/05/17/300/15712632.gif",
        "https://images.sex.com/images/pinporn/2015/01/13/300/10003697.gif",
        "https://images.sex.com/images/pinporn/2016/05/12/300/15677158.gif",
        "https://images.sex.com/images/pinporn/2017/12/28/300/18858174.gif",
        "https://images.sex.com/images/pinporn/2017/10/31/300/18585417.gif",
        "https://images.sex.com/images/pinporn/2014/09/03/300/7797708.gif",
        "https://images.sex.com/images/pinporn/2014/07/07/300/6829516.gif",
        "https://images.sex.com/images/pinporn/2016/05/10/300/15665494.gif",
        "https://images.sex.com/images/pinporn/2016/01/30/300/14892357.gif",
        "https://images.sex.com/images/pinporn/2013/12/24/300/4455594.gif",
        "https://images.sex.com/images/pinporn/2018/02/23/300/19149720.gif",
        "https://images.sex.com/images/pinporn/2017/06/24/300/17953645.gif"
];

var spank = message.content.substring(7);

const notspankembed = new Discord.RichEmbed()
.setTitle("This channel is not marked as NSFW!")
.setColor("#FF69B4");

const spankembed = new Discord.RichEmbed()
.setTitle(" Ohh spankings! ")
.setColor("#FF69B4")
.setDescription(message.author.toString() + " spanks " + spank)
.setImage(spanks[Math.floor(Math.random() * spanks.length)])
message.delete().catch();
if (message.channel.nsfw) message.channel.send(spankembed)
else message.channel.send(notspankembed)
}


        talkedRecently.add(message.author.id);
        setTimeout(() => {
          // Removes the user from the set after a minute
          talkedRecently.delete(message.author.id);
        }, 30000);
    }

module.exports.config = {
  name: "spank",
  category: "NSFW",
  description: "Spankings",
  usage: "spank",
  aliases: ["spankings"]
};
