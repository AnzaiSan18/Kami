const Discord = require("discord.js")
const superagent = require("superagent");
const talkedRecently = new Set();

module.exports.run = async (bot, message, args) => {
      if (talkedRecently.has(message.author.id)) {
            message.channel.send("Wait 30 secs before getting typing this again. - " + message.author);
    } else {
  let user = message.mentions.members.first();
    let bite = [
        "https://i.imgur.com/voiNiwT.mp4",
        "https://i.imgur.com/7ILh93o.gif",
        "https://i.imgur.com/rKoRJud.gif",
        "https://steamusercontent-a.akamaihd.net/ugc/541922841740909832/FD2D7EFC15F38E78CDB3F56C0752A503BB000582/",
        "https://i.imgur.com/XDA3pwU.mp4",
        "http://i.imgur.com/fWSIugu.gif",
        "https://i.imgur.com/wcBbh3R.gif",
        "https://i.imgur.com/DKtkgfm.gif",
        "https://pa1.narvii.com/6130/4983fd94b1d0c63ec4a4935864f447e5ab12d3de_hq.gif",
        "https://i.imgur.com/sfKJ0jd.mp4",
        "https://i.imgur.com/awILyPG.gif",
        "https://i.imgur.com/d6VgUNA.gif",
        "https://media1.tenor.com/images/556f9f0d64cb87d63429ce00a2477acf/tenor.gif?itemid=8197236",
        "https://media.tenor.com/images/567dbf3ec761c007d8ff3049b357b65c/tenor.gif",
];

    var bites = message.content.substring(6);

    const biteembed = new Discord.RichEmbed()
    .setColor("#42f4eb")
    .setDescription(message.author.toString() + " bites " + user)
    .setImage(bite[Math.floor(Math.random() * bite.length)])
    message.delete().catch();
    message.channel.send(biteembed)
      .catch();
}

        talkedRecently.add(message.author.id);
        setTimeout(() => {
          // Removes the user from the set after a minute
          talkedRecently.delete(message.author.id);
        }, 30000);
    }

 
module.exports.config = {
  name: "bite",
  category: "actions",
  description: "Bite someone",
  usage: "bite",
  aliases: ["nibble"]
};