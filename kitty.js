const Discord = require("discord.js")
const superagent = require("superagent");
const talkedRecently = new Set();
module.exports.run = async (bot, message, args) => {
      if (talkedRecently.has(message.author.id)) {
            message.channel.send("Wait 30 secs before getting typing this again. - " + message.author);
    } else {
  let cats = [
        "http://www.catgifpage.com/gifs/307.gif",
        "http://www.catgifpage.com/gifs/306.gif",
        "http://www.catgifpage.com/gifs/305.gif",
        "http://www.catgifpage.com/gifs/302.gif",
        "http://www.catgifpage.com/gifs/301.gif",
        "http://www.catgifpage.com/gifs/299.gif",
        "http://www.catgifpage.com/gifs/297.gif",
        "http://www.catgifpage.com/gifs/296.gif",
        "http://www.catgifpage.com/gifs/291.gif",
        "http://www.catgifpage.com/gifs/283.gif",
        "http://www.catgifpage.com/gifs/272.gif",
        "http://www.catgifpage.com/gifs/270.gif",
        "http://www.catgifpage.com/gifs/263.gif",
        "http://www.catgifpage.com/gifs/252.gif",
        "http://www.catgifpage.com/gifs/251.gif",
        "http://www.catgifpage.com/gifs/249.gif",
        "http://www.catgifpage.com/gifs/319.gif",
        "http://www.catgifpage.com/gifs/323.gif",
        "http://www.catgifpage.com/gifs/321.gif",
        "http://www.catgifpage.com/gifs/314.gif"
];

    var cat = message.content.substring(8);

    const catembed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setDescription(message.author.toString() + " Heres a random cat!!! " + cat)
    .setImage(cats[Math.floor(Math.random() * cats.length)])
    message.channel.send(catembed)
}

        talkedRecently.add(message.author.id);
        setTimeout(() => {
          // Removes the user from the set after a minute
          talkedRecently.delete(message.author.id);
        }, 30000);
    } 

module.exports.config = {
  name: "kitty",
  category: "random",
  description: "kitty",
  usage: "kitty",
  aliases: ["cat", "kit"]
};