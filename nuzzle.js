const Discord = require("discord.js")
const superagent = require("superagent");
const talkedRecently = new Set();
module.exports.run = async (bot, message, args) => {
      if (talkedRecently.has(message.author.id)) {
            message.channel.send("Wait 30 secs before getting typing this again. - " + message.author);
    } else {
if (args.join(" ") == "") {
        message.reply("😢 You can't nuzzle air!");
        return;
    } else {    
    let user = message.mentions.members.first();   
        
    let nuzzle = [
      "http://gifimage.net/wp-content/uploads/2017/09/anime-nuzzle-gif-3.gif",
      "https://media.giphy.com/media/f82EqBTeCEgcU/giphy.gif",
      "https://i.kym-cdn.com/photos/images/newsfeed/000/996/200/4e0.gif",
      "https://i.gifer.com/8TTP.gif",
      "https://i.pinimg.com/originals/6a/d6/d1/6ad6d1bec9b96a8c9f32ed83d22310db.gif",
      "https://i.gifer.com/NJCC.gif",
      "https://orig00.deviantart.net/1aa5/f/2014/068/0/f/nuzzle_by_pastelbits-d79mpk4.gif",
];

    var nuzzles = message.content.substring(9);

    const nuzzleembed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setDescription(message.author.toString() + " nuzzles " + nuzzles)
    .setImage(nuzzle[Math.floor(Math.random() * nuzzle.length)])
    message.delete().catch();
    message.channel.send(nuzzleembed) 
}

}

        talkedRecently.add(message.author.id);
        setTimeout(() => {
          // Removes the user from the set after a minute
          talkedRecently.delete(message.author.id);
        }, 30000);
    }

module.exports.config = {
  name: "nuzzle",
  category: "actions",
  description: "nuzzle someone",
  usage: "nuzzle",
  aliases: ["nuz"]
};
