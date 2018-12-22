const Discord = require("discord.js")
const superagent = require("superagent");
const talkedRecently = new Set();
module.exports.run = async (bot, message, args) => {
      if (talkedRecently.has(message.author.id)) {
            message.channel.send("Wait 30 secs before getting typing this again. - " + message.author);
    } else {

if (args.join(" ") == "") {
        message.reply("😢 You can't cuddle air!");
        return;
    } else {    
    let user = message.mentions.members.first();    
    let cuddle = [
        "https://cdn.weeb.sh/images/rJCAH8XPb.gif", 
        "https://images-ext-2.discordapp.net/external/deiSkTtWX5OwC1vTYjIrQIbiUjluTqEI-fNzBPyqY6A/https/cdn.weeb.sh/images/BkkgL8mDW.gif?width=300&height=300", 
        "https://images-ext-2.discordapp.net/external/Jj3RfZ2Yi3svRJZ8cjX9V05JjBm_IP8na1K6iqamUK0/https/cdn.weeb.sh/images/HkZDkeamf.gif?width=363&height=300", 
        "https://images-ext-2.discordapp.net/external/T9U9HUneHkO3AuGouq6Tf_W1UuwlMLhTMqcAQx-TUcU/https/cdn.weeb.sh/images/BywGX8caZ.gif?width=400&height=226", 
        "https://images-ext-2.discordapp.net/external/whl23w4UhBpXuP_kbmUUEyrU-LCHcAVghb7_ouEp6fA/https/cdn.weeb.sh/images/r1A77CZbz.gif?width=400&height=225",
        "https://images-ext-1.discordapp.net/external/no-ZYHnPdBboFs2y19kSLk1gWnnf2h1_Tj1K0Qt-9uA/https/cdn.weeb.sh/images/BJwpw_XLM.gif?width=400&height=216",
        "https://images-ext-2.discordapp.net/external/w1Q5jYQimjU_77YJoFEM-JJ1jcNkubZrLtxkcfVYr3U/https/cdn.weeb.sh/images/BkTe8U7v-.gif?width=400&height=214",
        "https://images-ext-2.discordapp.net/external/v96Ta_KPLMw94ZnN3H166MLO8bXDIi5fGA6zb6YnEQ4/https/cdn.weeb.sh/images/ByXs1AYKW.gif?width=288&height=300", 
        "https://images-ext-2.discordapp.net/external/ajddIhPZ_XgV1D6S6lsZdQaFKYZzMxhspzspH9b43RA/https/cdn.weeb.sh/images/SJbGLUQwZ.gif?width=400&height=225",
        "https://images-ext-2.discordapp.net/external/1YGAmpefLKf-w4UAHit2Cp7LWl0SQZPyw_ywB_WcuFM/https/cdn.weeb.sh/images/rJlMU87vb.gif?width=400&height=225",
        "https://images-ext-1.discordapp.net/external/9P6NuVI8NiRo6_qjzjgS8p9nHdRcoLdxpM72J0PXFy0/https/cdn.weeb.sh/images/r1s9RqB7G.gif?width=400&height=300",
        "https://images-ext-2.discordapp.net/external/gRGzIxTDKkaXSG_OmaIfyNNxzkV_bqorHdLUsgIPmhw/https/cdn.weeb.sh/images/SykzL87D-.gif?width=400&height=224",
        "https://images-ext-2.discordapp.net/external/aReNuzveRgyIGtUVE9CeP7XRjJEOnLT17LogTtLMEX4/https/cdn.weeb.sh/images/SyZk8U7vb.gif?width=400&height=225"
];

    var cuddles = message.content.substring(9);

    const cuddleembed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setDescription(message.author.toString() + " cuddles " + user)
    .setImage(cuddle[Math.floor(Math.random() * cuddle.length)])
    message.channel.send(cuddleembed) 
}
}

        talkedRecently.add(message.author.id);
        setTimeout(() => {
          // Removes the user from the set after a minute
          talkedRecently.delete(message.author.id);
        }, 30000);
    }
 
module.exports.config = {
  name: "cuddle",
  category: "actions",
  description: "cuddle someone",
  usage: "cuddle",
  aliases: ["cuddles", "snuggle"]
};