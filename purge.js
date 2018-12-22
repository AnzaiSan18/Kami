      
const Discord = require("discord.js");
const talkedRecently = new Set();

exports.run = async (bot, message, args) => {
  
if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("No.");
if(!args[0]) return message.channel.send("no");
message.channel.bulkDelete(args[0]).then(() => {
message.channel.send(`Purged ${args[0]} messages.`).then(msg => msg.delete(1000));
});
    
}

module.exports.config = {
  name: "purge",
  category: "admin",
  description: "purge",
  usage: "purge",
  aliases: ["clear", "clean", "prune"]
};