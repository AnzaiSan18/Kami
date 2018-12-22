const Discord = module.require('discord.js');
var moment = require("moment");
const talkedRecently = new Set();
exports.run = async (bot, message, args) => {

      if (talkedRecently.has(message.author.id)) {
            message.channel.send("Wait 30 secs before getting typing this again. - " + message.author);
    } else {

  function checkBots(guild) {
    let botCount = 0; // This is value that we will return
    guild.members.forEach(member => { // We are executing this code for every user that is in guild
      if(member.user.bot) botCount++; // If user is a bot, add 1 to botCount value
    });
    return botCount; 
  }

  function checkMembers(guild) {
    let memberCount = 0;
    guild.members.forEach(member => {
      if(!member.user.bot) memberCount++; 
    });
    return memberCount;
  }

  let embed = new Discord.RichEmbed()
    .setAuthor(`${message.guild.name} - Informations`, message.guild.iconURL) 
    .addField('Server owner', message.guild.owner.user.tag, true)
    .addField('Server region', message.guild.region, true) 
    .addField('Channel count', `message.guild.channels.filter(channel => channel.type === 'text').size}** text - **${message.guild.channels.filter(channel => channel.type === 'voice').size}** audio`, true) 
    .addField('Afk Channel',`${message.guild.afkChannel}`, true) 
    .addField('Total member count', message.guild.memberCount) 
    .addField('Humans', checkMembers(message.guild), true)
    .addField('Bots', checkBots(message.guild), true)

    .addField('Verification level', message.guild.verificationLevel, true)
    .addField(`Emojies - **${message.channel.guild.emojis.size}**:, ${message.guild.emojis.map(e => e).join(', ')}`)
    .addField(`Roles - **${message.channel.guild.roles.size}**:,  ${message.guild.roles.array().map(g => g).join(', ')}`)

    .setFooter('Guild created at:')
    .setTimestamp(moment(message.guild.createdAt).format("LL")); 

    return message.channel.send(embed);
}

        talkedRecently.add(message.author.id);
        setTimeout(() => {
          // Removes the user from the set after a minute
          talkedRecently.delete(message.author.id);
        }, 30000);
    }


module.exports.config = {
  name: "serverinfo",
  category: "util",
  description: "Serverinfo",
  usage: "sserverinfo",
  aliases: ["sinfo"]
};