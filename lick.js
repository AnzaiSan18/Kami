const Discord = require("discord.js")
const superagent = require("superagent");
const talkedRecently = new Set();
module.exports.run = async (bot, message, args) => {
      if (talkedRecently.has(message.author.id)) {
            message.channel.send("Wait 30 secs before getting typing this again. - " + message.author);
    } else {
if (args.join(" ") == "") {
        message.reply("😢 You can't lick air!");
        return;
    } else {    
    let user = message.mentions.members.first();   
    let licks = [
    "https://i.imgur.com/UPlNJs8.gif",
    "https://i.imgur.com/DrNAjWk.gif",
    "https://i.imgur.com/Pv6QJnJ.gif",
    "https://i.imgur.com/Udaklgp.gif",
    "https://i.imgur.com/iM2Hzl3.gif",
    "https://i.imgur.com/UUFXjzH.gif",
    "https://i.imgur.com/QDpVqHe.gif",
    "https://i.imgur.com/uALJJV2.gif",
    "https://i.imgur.com/xZ04mFM.gif",
]


    var lick = message.content.substring(6);

    const licksembed = new Discord.RichEmbed()
    .setColor("#09e284")
    .setDescription(message.author.toString() + " Has licked " + lick)
    .setImage(licks[Math.floor(Math.random() * licks.length)])
    message.delete().catch();
    message.channel.send(licksembed)
      .catch();
}
}

        talkedRecently.add(message.author.id);
        setTimeout(() => {
          // Removes the user from the set after a minute
          talkedRecently.delete(message.author.id);
        }, 30000);
    }

module.exports.config = {
  name: "lick",
  category: "actions",
  description: "Lick someone",
  usage: "lick",
  aliases: ["licks"]
};
