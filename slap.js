const Discord = require("discord.js")
const superagent = require("superagent");
const talkedRecently = new Set();
module.exports.run = async (bot, message, args) => {
      if (talkedRecently.has(message.author.id)) {
            message.channel.send("Wait 30 secs before getting typing this again. - " + message.author);
    } else {
    let slaps = [
        'https://i.giphy.com/media/3XlEk2RxPS1m8/giphy.gif',
        'https://i.giphy.com/media/mEtSQlxqBtWWA/giphy.gif',
        'https://i.giphy.com/media/j3iGKfXRKlLqw/giphy.gif',
        'https://i.giphy.com/media/2M2RtPm8T2kOQ/giphy.gif',
        'https://i.giphy.com/media/l3YSimA8CV1k41b1u/giphy.gif',
        'https://i.giphy.com/media/WLXO8OZmq0JK8/giphy.gif',
        "https://cdn.discordapp.com/attachments/422469871343894540/426371193759596544/77nrOxf.gif",
        "https://cdn.discordapp.com/attachments/422469871343894540/426371193080250370/GlumDimwittedHerculesbeetle-size_restricted.gif",
        "https://cdn.discordapp.com/attachments/422469871343894540/426371193080250368/aWY6m_s-200x150.gif",
        "https://cdn.discordapp.com/attachments/422469871343894540/426371192165761027/giphy_5.gif",
        "https://cdn.discordapp.com/attachments/422469871343894540/426371192165761025/Ml0X6_s-200x150.gif",
        "https://cdn.discordapp.com/attachments/422469871343894540/426371191293476866/Jordan-cat-face-slap.gif",
        "https://cdn.discordapp.com/attachments/422469871343894540/426371191293476864/tumblr_lvnv62xwlg1qmnwwpo1_r1_400.gif",
        "https://78.media.tumblr.com/edc9353ef5e7e3201cc7d773ef51a3da/tumblr_oeev3bA2h11vtc4s3o1_1280.gif",
        "https://i.pinimg.com/originals/16/ce/91/16ce91a792f6aaef9795b8bc8bc54ca5.gif",
        "https://i.pinimg.com/originals/b6/e3/9e/b6e39e693be3968d212b0fe5754f85db.gif",
        "https://i.pinimg.com/originals/9b/44/30/9b443002895623f71af2af82b9997be1.gif",
        "http://stream1.gifsoup.com/view6/3765972/i-ma-slap-some-sense-into-you-o.gif",
        "http://25.media.tumblr.com/tumblr_m1nsxc3jUu1qdjfd8o1_400.gif",
        "https://media1.tenor.com/images/13844a6bc3d247b571e2cee25651d1a1/tenor.gif?itemid=4991177",
        "https://static.fjcdn.com/gifs/Mm_966fc2_1916375.gif",
        "http://gifimage.net/wp-content/uploads/2017/07/anime-slap-gif-12.gif",
        "https://media.giphy.com/media/iUgoB9zOO0QkU/giphy.gif",
        "https://cdn.weeb.sh/images/SkZTQkKPZ.gif",
        "https://cdn.weeb.sh/images/B1-nQyFDb.gif",
        "https://media.discordapp.net/attachments/411582982839730176/430159305300377610/Mm_966fc2_1916375.gif?width=400&height=227",
    ];

    var slapped = message.content.substring(6);

    const slap = new Discord.RichEmbed()
    .setColor("#44099e")
    .setDescription(message.author.toString() + " has slapped " + slapped)
    .setImage(slaps[Math.floor(Math.random() * slaps.length)])
    message.delete().catch();
    message.channel.send(slap)
      .catch();
}

        talkedRecently.add(message.author.id);
        setTimeout(() => {
          // Removes the user from the set after a minute
          talkedRecently.delete(message.author.id);
        }, 30000);
    }

module.exports.config = {
  name: "slap",
  category: "actions",
  description: "Slap someone",
  usage: "slap",
  aliases: ["beatup"]
};

