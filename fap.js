const Discord = require("discord.js")
const superagent = require("superagent");
const talkedRecently = new Set();
module.exports.run = async (bot, message, args) => {
              if (talkedRecently.has(message.author.id)) {
            message.channel.send("Wait 30 secs before getting typing this again. - " + message.author);
    } else {
    let faaap = [
        "https://images-ext-2.discordapp.net/external/1wTn1ZhC4Tfd2gzbZA_PgwN2yMl0mBSDFH5GtLJS198/https/68.media.tumblr.com/a42bf39554cd6011a16842101f64d4c9/tumblr_o97nw2nYDc1vyuv2vo1_500.gif?width=400&height=223",
        "https://images-ext-2.discordapp.net/external/vd-3RCr57A5Xi1K7nOZQZ61uSA3KimV_2L-YCddjeL4/http/78.media.tumblr.com/4d65f1d11066a853fe768ec2e8e86084/tumblr_ozubvmHh5L1ruwug3o1_400.gif", 
        "https://images-ext-2.discordapp.net/external/Z7z7-JpqzNgDwFtxaFjwTzzLht9sb4OyVvgLjiWsmsE/https/78.media.tumblr.com/c189121e950cf4e07a9aa4b082ad2cd1/tumblr_ol3pnsJxcB1v1ny39o1_400.gif?width=300&height=300",
        "https://images-ext-2.discordapp.net/external/Z7Fi_tZbQBVVdGpWtG1ZAVwBANjjlSN4navltWtDx0E/https/78.media.tumblr.com/949f599fd8e9a3fcc30f8e470cfdea09/tumblr_oy4x5pHQXH1vcapj9o1_250.gif?width=175&height=300",
        "https://images-ext-2.discordapp.net/external/n_Or1s-7drP4clp4iEEj1v4RPcYInRFTv5G_9lqyCE8/https/78.media.tumblr.com/5cf654fc68b9fd3888be1046d52698b3/tumblr_nmrqi3802u1u8lhdjo1_500.gif?width=400&height=211",
        "https://images-ext-1.discordapp.net/external/0gWy0E7mMNmysOP48_4BSlRsQCpsI-ylHxsd6yJ0llw/https/78.media.tumblr.com/e5275c7b5c805bfd1b44cd1afd043f0c/tumblr_niy425gNHv1tezjkso1_500.gif?width=400&height=200",
        "https://images-ext-1.discordapp.net/external/JtVOhrgJxXomcUJSus_lxryA24DUFx2s3LTCDsV30Eo/https/i.imgur.com/rYZRKaH.gif",
        "https://images-ext-1.discordapp.net/external/tQWopINRlKOtWu4m0eAYIivlDbXKl8BzUKs_8NgOwTY/https/78.media.tumblr.com/41c75f7cfa13eddd5f60ae6a3a6e38a8/tumblr_mtnt7a48iC1sdr3ojo2_500.gif?width=400&height=225",
        "https://images-ext-2.discordapp.net/external/r46WmBDskb1SQSiF6bxlrHonbZX-Q9XE3Od55oG4W-I/https/78.media.tumblr.com/7aad759746875dba66fea7db9908c8ac/tumblr_o7v1bp9Lgk1tawv7ho1_500.gif?width=400&height=226",
        "https://images-ext-1.discordapp.net/external/DDEbv9QhqDrLaMAw68qAcnpS8Bu96C9A9oueA_AC4DU/https/78.media.tumblr.com/8ff97a4f2b6ec511bd463f23cdad3f9f/tumblr_nfqv92sAd71skhdqxo1_500.gif?width=400&height=226",
        "https://images-ext-2.discordapp.net/external/s_sCLyL4AvJL7gGFT7C1z1OqbAeqQYqOUaiG_FLnNeQ/https/78.media.tumblr.com/5850df158a4d8b89fd5f4ed235bc6502/tumblr_nsxjgk1PMh1uxd508o1_500.gif?width=400&height=209"
];

    var fap = message.content.substring(7);

    const nofapembed = new Discord.RichEmbed()
    .setTitle("This channel is not marked as NSFW! ðŸ˜‰")
    .setColor("#09e284")


    const fapembed = new Discord.RichEmbed()
    .setColor("#09e284")
    .setDescription(message.author.toString())
    .setImage(faaap[Math.floor(Math.random() * faaap.length)])
    message.delete().catch();
    if (message.channel.nsfw) message.channel.send(fapembed)
else message.channel.send(nofapembed)
}

        talkedRecently.add(message.author.id);
        setTimeout(() => {
          // Removes the user from the set after a minute
          talkedRecently.delete(message.author.id);
        }, 30000);
    }
 
module.exports.config = {
  name: "fap",
  category: "NSFW",
  description: "fap",
  usage: "fap",
  aliases: ["fapp", "faps"]
};