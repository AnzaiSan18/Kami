const Discord = require('discord.js');
exports.run = (bot, message, args) => {

  if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("You don't have permisson")
    
  let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!bUser) return message.channel.send("Please mention a user, and try again!");
    let bReason = args.join(" ").slice(22);
    if(!bReason) return message.channel.send("Please specify a reason and try again!")
    if (bUser.hasPermission("BAN_MEMBERS")) return message.channel.send("That person can't be banned");

    let banEmbed = new Discord.RichEmbed()
    .setDescription("~Ban~")
    .setColor("#bc0000")
    .addField("Banned User", `${bUser} with ID ${bUser.id}`)
    .addField("Banned By", `<@${message.author.id}> with ID ${message.author.id}`)
    .addField("Banned In", message.channel)
    .addField("Time", message.createdAt)
    .addField("Reason", bReason);

    let incidentchannel = message.guild.channels.find('name', 'logs');
    if(!incidentchannel) return message.channel.send("Can't find incidents channel.");

    message.guild.member(bUser).ban(bReason);
    incidentchannel.send(banEmbed);
}

module.exports.config = {
  name: "ban",
  category: "admin",
  description: "ban someone",
  usage: "ban",
  aliases: ["fuckoff"]
};