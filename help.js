const Discord = require("discord.js");

exports.run = async (bot, message, args, tools, con) => {

  message.channel.send({
    embed: {
      color: 3447003,
      title: "Help Menu!:",
      fields: [
        { name: "Actions", value: `${bot.commands.filter(cmd => cmd.config.category === 'actions').map(cmd => `\`${cmd.config.name}\``).join(", ")}`, inline: true },
        { name: "Random", value: `${bot.commands.filter(cmd => cmd.config.category === 'random').map(cmd => `\`${cmd.config.name}\``).join(", ")}`, inline: true },
        { name: "Utility", value: `${bot.commands.filter(cmd => cmd.config.category === 'util').map(cmd => `\`${cmd.config.name}\``).join(", ")}` },
        { name: "NSFW", value: `${bot.commands.filter(cmd => cmd.config.category === 'NSFW').map(cmd => `\`${cmd.config.name}\``).join(", ")}` },
        { name: "Hentai", value: `${bot.commands.filter(cmd => cmd.config.category === 'hentai').map(cmd => `\`${cmd.config.name}\``).join(", ")}` },
        { name: "Owner", value: `${bot.commands.filter(cmd => cmd.config.category === 'owner').map(cmd => `\`${cmd.config.name}\``).join(", ")}` }
      ]
    }
  })


  if (!message.member.hasPermission("ADMINISTRATOR")) return undefined;
  else {
    let modembed = new Discord.RichEmbed()
      .setTimestamp()
      .setTitle("Mod Menu")
      .setColor("RANDOM")
      .addField("Current commands available:", `${bot.commands.filter(cmd => cmd.config.category === 'admin').map(cmd => `\`${cmd.config.name}\``)}`)
      .setFooter(`DM Mod Help`)

    try {
      await message.author.send(modembed);
    } catch (e) {
      message.reply("Yours DMs are locked. Failed to send you the mod commands.")
    }
  }
}
module.exports.config = {
  name: "help",
  category: "util",
  description: "help",
  usage: "help",
  aliases: ["helpme", "support"]
};