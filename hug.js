const Discord = require("discord.js")
const superagent = require("superagent");
const talkedRecently = new Set();
module.exports.run = async (bot, message, args) => {
      if (talkedRecently.has(message.author.id)) {
            message.channel.send("Wait 30 secs before getting typing this again. - " + message.author);
    } else {
    if (args.join(" ") == "") {
        message.reply("😢 You can't hug air!");
        return;
    } else {    
    let user = message.mentions.members.first();   
  let hug = [
    "https://images-ext-2.discordapp.net/external/ald1WHnALpYd-BV4lAZ1WYJ5bV938TPuERkyqse2Fig/https/cdn.weeb.sh/images/SJfEks3Rb.gif?width=400&height=225", 
    "https://images-ext-2.discordapp.net/external/0Qqr3MhBsC1p5peV7LwrRY0QpuQtssC88kEpUTlgtsE/https/cdn.weeb.sh/images/r1bAksn0W.gif", 
    "https://images-ext-2.discordapp.net/external/jrX0nCT1NyyMX0P35blVgvt51v3Y9tBPEjaKOlJgvP0/https/cdn.weeb.sh/images/Hy4hxRKtW.gif?width=400&height=225",
    "https://images-ext-2.discordapp.net/external/2AiwmHWQaS_XkvvnTXvOjQ97_i7obTrXZWBo79XlIu0/https/cdn.weeb.sh/images/r1R3_d7v-.gif?width=400&height=225",
    "https://images-ext-1.discordapp.net/external/3wXDLr7wXxXe0SXGMsZAAKR68yQDiuFn9y5d4ww1UlI/https/cdn.weeb.sh/images/BJ0UovdUM.gif?width=400&height=208", 
    "https://images-ext-1.discordapp.net/external/q8Ci-isNQCEVoOGvxgOOYld2muIowEqOKQZAvlwEqjA/https/cdn.weeb.sh/images/BJoC__XvZ.gif",
    "https://images-ext-2.discordapp.net/external/QYnzqF83OZ14RzVoM1t3EUw62M5x9WiIRTdwwNkVW0c/https/cdn.weeb.sh/images/HkfgF_QvW.gif?width=400&height=225", 
    "https://images-ext-1.discordapp.net/external/eWPgSQ6L8iMQoyFmVFYuP6EDbSM1zRI9fULTZlVyT9Q/https/cdn.weeb.sh/images/r1v2_uXP-.gif?width=400&height=224",
    "https://images-ext-1.discordapp.net/external/_FI20LII9PG87rzbd9WDjmWMqkSN4QsECVdf6sYzunI/https/cdn.weeb.sh/images/S1DyFuQD-.gif?width=400&height=224", 
    "https://images-ext-1.discordapp.net/external/iYOTMwzM8SAFzhx4JoSFGRpSdSN75hF3454lyxc-wOw/https/cdn.weeb.sh/images/r1kC_dQPW.gif?width=400&height=223", 
    "https://images-ext-2.discordapp.net/external/KzJieMWS7_SU7uAos_EhSOyh5amvsElHGGKvM4CiGyE/https/cdn.weeb.sh/images/S1qhfy2cz.gif?width=400&height=216", 
    "https://images-ext-1.discordapp.net/external/DW_JAjCEp8cv0BuB8MqCsJcGrcP0hMNyi902U841x5E/https/cdn.weeb.sh/images/B11CDkhqM.gif?width=400&height=198"
];

    var hugg = message.content.substring(6);
    
    const embedhug = new Discord.RichEmbed()
    .setColor("#09e284")
    .setDescription(message.author.toString() + " has hugged " + hugg)
    .setImage(hug[Math.floor(Math.random() * hug.length)])
    message.channel.send(embedhug)
}

}

        talkedRecently.add(message.author.id);
        setTimeout(() => {
          // Removes the user from the set after a minute
          talkedRecently.delete(message.author.id);
        }, 30000);
    }

module.exports.config = {
  name: "hug",
  category: "actions",
  description: "Hug someone",
  usage: "hugs",
  aliases: ["hugs"]
};