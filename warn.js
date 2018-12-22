const Discord = require('discord.js');
exports.run = (bot, message, args) => {
  if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send('Sorry, you don\'t have permission!')
  let reason = args.slice(1).join(' ');
  let user = message.mentions.users.first();
  if (reason.length < 1) return message.reply('You must supply a reason for the warning.');
  if (message.mentions.users.size < 1) return message.reply('You must mention someone to warn them.').catch(console.error);
  const embed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setTimestamp()
  .addField('Action:', 'Warning')
  .addField('User:', `${user.username}#${user.discriminator}`)
  .addField('Modrator:', `${message.author.username}#${message.author.discriminator}`)
  .addField('Reason', reason);
  let incidentchannel = message.guild.channels.find('name', 'logs');
  if(!incidentchannel) return message.channel.send("Can't find incidents channel.");

    incidentchannel.send(embed);
}

module.exports.config = {
    name: "warn",
    description: "Issue a warning!",
    usage: "warn [mention] [reason]",
    category: "admin",
    aliases: ["warn", "strict"]
}