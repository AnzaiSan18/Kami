const Discord = require("discord.js")
const superagent = require("superagent");
const talkedRecently = new Set();
module.exports.run = async (bot, message, args) => {
      if (talkedRecently.has(message.author.id)) {
            message.channel.send("Wait 30 secs before getting typing this again. - " + message.author);
    } else {
if (args.join(" ") == "") {
        message.reply("😢 Awwh, don't dance alone!");
        return;
    } else {    
    let user = message.mentions.members.first();   
    
    let dance = [
        "https://media.tenor.com/images/e87bc763c55a4a39272926007126961e/tenor.gif",
        "https://media1.tenor.com/images/cd04b81a75e017a9aaeba414d5a5a44f/tenor.gif?itemid=9085854",
        "https://media1.tenor.com/images/9841990160f71767843af6cf08b5502d/tenor.gif?itemid=9251559",
        "https://media1.tenor.com/images/e282b8c13fa3758517ac5eb9c8e3c4f1/tenor.gif?itemid=9060211",
        "https://media1.tenor.com/images/c5ba2c26396af099dd5e64ebf6be1355/tenor.gif?itemid=5611034",
        "https://media1.tenor.com/images/a65229f878fad4e4973c9e8caf12bca9/tenor.gif?itemid=4810806",
        "https://media1.tenor.com/images/a46ad100db83c0abb116d3855301c940/tenor.gif?itemid=4665031",
        "https://media1.tenor.com/images/366c9d8296b3ee833ba9ce7e440260f8/tenor.gif?itemid=9302339",
        "https://media1.tenor.com/images/4ea6b5a95320003a13c03f09351abca0/tenor.gif?itemid=7275499",
        "https://media1.tenor.com/images/824daa6db818c4123e4c485fb67cb37e/tenor.gif?itemid=7226219",
        "https://media1.tenor.com/images/569dd99db91a02e314aedd00e576e3a7/tenor.gif?itemid=8539545",
        "https://media1.tenor.com/images/9b89ddf1522e582dad4fd7950f0a62be/tenor.gif?itemid=5646380",
        "https://media1.tenor.com/images/6bea3ba11d05fa143f3d720bc6523892/tenor.gif?itemid=7930806",
        "https://media1.tenor.com/images/8f94909c2dd36eee480aa95086192223/tenor.gif?itemid=4906513",
        "https://media1.tenor.com/images/94e0a12faac0821738185def2d96a808/tenor.gif?itemid=7797151",
        "https://media1.tenor.com/images/46605585d5fd5071e61e084005320178/tenor.gif?itemid=9523000",
        "https://media1.tenor.com/images/b8401d232cca2fa7cb5e0e876de4f3cd/tenor.gif?itemid=4692366",
        "https://media1.tenor.com/images/92b54653bd9abcf9b5cc4726fab563ff/tenor.gif?itemid=9382458",
        "https://media1.tenor.com/images/47fe86ca0a5f98d8c585c30bbd16543f/tenor.gif?itemid=9921118",
];

    var dances = message.content.substring(7);

    const danceembed = new Discord.RichEmbed()
    .setColor('RANOM')
    .setDescription(message.author.toString() + " Dances with " + user)
    .setImage(dance[Math.floor(Math.random() * dance.length)])
    message.delete().catch();
    message.channel.send(danceembed)
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
  name: "dance",
  category: "actions",
  description: "dance",
  usage: "dance",
  aliases: ["groovy"]
};