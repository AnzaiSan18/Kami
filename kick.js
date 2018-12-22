const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
  let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if (!kUser) return message.channel.send("Please mention a user, and try again!");
  let kReason = args.join(" ").slice(22);
  if (!kReason) return message.channel.send("Please specify a reason and try again!")
  if (!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("No can do pal!");
  if (kUser.hasPermission("KICK_MEMBERS")) return message.channel.send("That person can't be kicked!");
  
  let kickEmbed = new Discord.RichEmbed()
  .setDescription("~Kick~")
  .setColor("#e56b00")
  .addField("Kicked User", `${kUser} with ID ${kUser.id}`)
  .addField("Kicked By", `<@${message.author.id}> with ID ${message.author.id}`)
  .addField("Kicked In", message.channel)
  .addField("Tiime", message.createdAt)
  .addField("Reason", kReason);
    
  let reportschannel = message.guild.channels.find(`name`, "general");
  if (!reportschannel) return message.channel.send("Can't find reports channel.");
    
  message.guild.member(kUser).kick(kReason);
  reportschannel.send(kickEmbed)
}
 
module.exports.config = {
  name: "kick",
  category: "admin",
  description: "kick someone",
  usage: "kick",
  aliases: ["goaway"]
};