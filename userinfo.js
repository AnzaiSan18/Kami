const Discord = require('discord.js');
const moment = require("moment");
const talkedRecently = new Set();
exports.run = async(bot, message, args, ops) => {
      if (talkedRecently.has(message.author.id)) {
            message.channel.send("Wait 30 secs before getting typing this again. - " + message.author);
    } else {

  let user, member;
if (message.mentions.users.size) {
  user = message.mentions.users.first();
}
else if (args.id) {
  member = await message.guild.fetchMember(args.id);
  if (member) {
    user = member.user;
  }
}
if (!user) {
  user = message.author;
}
if (!member) {
  member = await message.guild.fetchMember(user.id);
}
let nick = member.nickname;
if (!nick) {
  nick = '-';
}
let status = user.presence.status;
if (status === 'online') {
  status = 'Online';
}
else if (status === 'idle') {
  status = 'Idle';
}
else if (status === 'dnd') {
  status = 'Do Not Disturb';
}
else {
  status = 'Offline';
}

let roles = member.roles.map(r => r.name).slice(1).join('\n');
if (roles.length === 0) roles = '-';

let userembed = new Discord.RichEmbed()
.setAuthor(message.author.username)
.setDescription("**__This is the user's info!__**")
.setColor("#42f4eb")
.addField("**__Full Username__**", user.tag, true)
.addField("**__ID__**", user.id, true)
.addField("Created At:", `${moment.utc(user.createdAt).format('dddd, MMMM Do YYYY, HH:mm:ss')}`, true)
.addField("Joined Server:", `${moment.utc(member.joinedAt).format('dddd, MMMM Do YYYY, HH:mm:ss')}`, true)
.addField("**__Status__**", status, true)
.addField("**__Nickname__**", nick, true)
.addField("**__Roles__**", roles, true)
.addField("Game:", `${user.presence.game ? user.presence.game.name : 'None'}`, true)
.addField("**__Requested By__**", message.author.tag) 
.setThumbnail(user.displayAvatarURL)
.setTimestamp()

message.delete().catch();
message.channel.send(userembed)
      .catch();
      
  }

        talkedRecently.add(message.author.id);
        setTimeout(() => {
          // Removes the user from the set after a minute
          talkedRecently.delete(message.author.id);
        }, 30000);
    }

module.exports.config = {
    name: "userinfo",
    description: "userinfo",
    usage: "!userinfo",
    category: "util",
    aliases: ["user", "ui"]
}