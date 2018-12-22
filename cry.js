const Discord = require("discord.js")
const superagent = require("superagent");
const talkedRecently = new Set();
module.exports.run = async (bot, message, args) => {
      if (talkedRecently.has(message.author.id)) {
            message.channel.send("Wait 30 secs before getting typing this again. - " + message.author);
    } else {
     let crys = [
        "https://media1.tenor.com/images/ce52606293142a2bd11cda1d3f0dc12c/tenor.gif?itemid=5184314",
        "https://media1.tenor.com/images/c28ac58e9ed291c4dc784524dc0ac127/tenor.gif?itemid=9039052",
        "https://media1.tenor.com/images/f7fde4b118501c8fa5cb1a5dd171beab/tenor.gif?itemid=5652242",
        "https://media1.tenor.com/images/829e55b133ceb0a17f0930275fb28a03/tenor.gif?itemid=3543306",
        "https://media1.tenor.com/images/c2f8c21c93d26db295607eba1cd23d22/tenor.gif?itemid=9099975",
        "https://media1.tenor.com/images/6938dda780919ba2db48d42936fca709/tenor.gif?itemid=5017622",
        "https://media1.tenor.com/images/36b160e994566af8ce79e9bfc0c6130b/tenor.gif?itemid=10035498",
        "https://media1.tenor.com/images/7f480757eb2cd363c00b0c2cc81521d5/tenor.gif?itemid=8329549",
        "https://media1.tenor.com/images/031c7c348d3b86296976e2407723d4a8/tenor.gif?itemid=5014031",
];
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
    
    const hugembed = new Discord.RichEmbed()
    .setColor("#09e284")
    .setDescription("Don't cry, heres a hug")
    .setImage(hug[Math.floor(Math.random() * hug.length)])

var cry = message.content.substring(5);

const crysembed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setDescription(message.author.toString() + " :( " )
    .setImage(crys[Math.floor(Math.random() * crys.length)])
    message.channel.send(crysembed).then(message.channel.send(hugembed))
      .catch();
}

        talkedRecently.add(message.author.id);
        setTimeout(() => {
          // Removes the user from the set after a minute
          talkedRecently.delete(message.author.id);
        }, 30000);
    } 

module.exports.config = {
  name: "cry",
  category: "actions",
  description: "cry",
  usage: "cry",
  aliases: ["sad"]
};