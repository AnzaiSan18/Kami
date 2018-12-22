const Discord = require("discord.js")
const superagent = require("superagent");
const talkedRecently = new Set();
module.exports.run = async (bot, message, args) => {
      if (talkedRecently.has(message.author.id)) {
            message.channel.send("Wait 30 secs before getting typing this again. - " + message.author);
    } else {
    let user = message.mentions.members.first();

    let pats = [
        "https://i.imgur.com/2lacG7l.gif",
        "https://i.imgur.com/UWbKpx8.gif",
        "https://i.imgur.com/4ssddEQ.gif",
        "https://i.imgur.com/2k0MFIr.gif",
        "https://i.imgur.com/LUypjw3.gif",
        "https://i.imgur.com/F3cjr3n.gif",
        "https://i.imgur.com/v0uoVEQ.gif",
        "https://i.imgur.com/NNOz81F.gif",
        "https://i.imgur.com/0znUWqT.gif",
        "https://i.imgur.com/TPqMPka.gif",
        "https://i.imgur.com/idRX8tM.gif",
        "https://i.imgur.com/IN7nqfG.gif",
        "https://i.imgur.com/qSWcWfZ.jpg",
        "https://i.imgur.com/EwCxPES.jpg",
        "https://i.imgur.com/8ZqBkJ9.jpg",
        "https://i.imgur.com/WvOGCdU.png",
        "https://i.imgur.com/zq5kn4f.jpg",
        "https://i.imgur.com/fp9XJZO.gif",
        "https://i.imgur.com/wM8ZUTN.gif",
        "https://i.imgur.com/bDMMk0L.gif",
        "https://images-ext-1.discordapp.net/external/utRQOz0L9yq0Fw0CBKZMwR-_KGIKhVtECeGSoA_4o6Y/https/cdn.weeb.sh/images/rktgg1Yv-.gif",
        "https://images-ext-1.discordapp.net/external/2j3p4vd6QDO0f1VOeQ615IFQNj8AHGlbb3ozNN7yg4g/https/cdn.weeb.sh/images/H1jnJktPb.gif",
        "https://images-ext-2.discordapp.net/external/wR79npSG4g_PyfjIu-G6fcgNC8atFctLfa64UOq1z6U/https/cdn.weeb.sh/images/Sy6Gektw-.gif",
        "https://images-ext-1.discordapp.net/external/VQtB-a5MFiL7cV7ki3lv6XHrTlVf5QIyzrpPM3mtECQ/https/cdn.weeb.sh/images/ByOc1ktv-.gif",
        "https://images-ext-1.discordapp.net/external/Ql6Zjv8yPXerPVKMmjEwqU3HrF6A1PKSOLsWkDy3XbY/https/cdn.weeb.sh/images/rJavp1KVM.gif",
        "https://images-ext-2.discordapp.net/external/MVcn8WkjgAu6-D51mUdZ28pM-rgmQYuWAzvHqulnrI4/https/cdn.weeb.sh/images/ryh6x04Rb.gif",
        "https://images-ext-2.discordapp.net/external/xuPA4vty34J7TqpW_7BNPOJN49T6X601JozaR5_SXcY/https/cdn.weeb.sh/images/rktsca40-.gif?width=400&height=226",
        "https://images-ext-2.discordapp.net/external/TyBXP7yB49hCmnY_67YlRHLXpZt29FD8_vtFQwnoESA/https/cdn.weeb.sh/images/B1SOzCV0W.gif",
    ];

    var pat = message.content.substring(6)
    const patembed = new Discord.RichEmbed()
    .setDescription(message.author.toString() + " has patted " + user )
    .setImage(pats[Math.floor(Math.random() * pats.length)])
    .setColor("#d3340c")
    message.delete().catch();
    message.channel.send(patembed)
}

        talkedRecently.add(message.author.id);
        setTimeout(() => {
          // Removes the user from the set after a minute
          talkedRecently.delete(message.author.id);
        }, 30000);
    }

module.exports.config = {
  name: "pat",
  category: "actions",
  description: "Pat someone",
  usage: "Pat",
  aliases: ["patpat"]
};