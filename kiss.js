const Discord = require("discord.js")
const superagent = require("superagent");
const talkedRecently = new Set();
module.exports.run = async (bot, message, args) => {
      if (talkedRecently.has(message.author.id)) {
            message.channel.send("Wait 30 secs before getting typing this again. - " + message.author);
    } else {
if (args.join(" ") == "") {
        message.reply("😢 You can't kiss air!");
        return;
    } else {    
    let user = message.mentions.members.first();   
        let kiss = [
        "https://images-ext-2.discordapp.net/external/gH_EpCJcPfbBg4YGRUMKTJFVDm-zFx_Cr-_E1I7cWic/https/cdn.weeb.sh/images/S1-KXsh0b.gif?width=400&height=225",
        "https://images-ext-2.discordapp.net/external/j-c0vbO4sul_FX0em3c1CG5604EIhKtLs7b-_QpaE9U/https/cdn.weeb.sh/images/rJoL2pdvb.gif",
        "https://images-ext-2.discordapp.net/external/3MV0SEwyPKGDzEJcy5d_ve_Tz8V6hnJP8ur-uSC1gIk/https/cdn.weeb.sh/images/HJkxXNtjZ.gif?width=400&height=225",
        "https://images-ext-2.discordapp.net/external/tvFGLsLyCMGlSuJ7eIahDoUADC7xKane3VZm4BMXGa4/https/cdn.weeb.sh/images/rkFSiEedf.gif?width=400&height=226",
        "https://images-ext-2.discordapp.net/external/4TtSLSXuEnYwFzIJOy1rwuMnXitSIJgRcuRPZ7OJnCg/https/cdn.weeb.sh/images/Hkt-nTOwW.gif?width=400&height=250",
        "https://images-ext-1.discordapp.net/external/fu5fwqE3EBaQYUVI9TE6QRMyATAm_R2CH-nwfyoHcio/https/cdn.weeb.sh/images/HJ5khTOP-.gif?width=400&height=208",
        "https://images-ext-1.discordapp.net/external/Gl8911h89Tv6k_12U3G6XOtFbbJQvpGDeb4AxSu2HEE/https/cdn.weeb.sh/images/BkUJNec1M.gif?width=400&height=225",
        "https://images-ext-1.discordapp.net/external/cRqtdoOO6XWbRNMOKB-v3AEWTTfkV7qNhvKiIePrPmc/https/cdn.weeb.sh/images/B12LhT_Pb.gif?width=400&height=169",
        "https://images-ext-2.discordapp.net/external/rD7yBGlVLD3FPr6k8n9j4us4A7wSQVSTcDsoBASGadY/https/cdn.weeb.sh/images/r10UnpOPZ.gif",
        "https://images-ext-2.discordapp.net/external/_GpwSBCIUeqBHpvR5Cp-zfZ3W1GGlkadNxs5OQoYW2Y/https/cdn.weeb.sh/images/Skv72TuPW.gif?width=400&height=203",
        "https://images-ext-2.discordapp.net/external/RcSL94rIJExFd6AQSsEXwTyjcBIpX4KVjc4FGtxm7Qs/https/cdn.weeb.sh/images/BkLQnT_PZ.gif?width=400&height=204",
        "https://images-ext-2.discordapp.net/external/DHt8EyS6gs1w0_l5Px2rc0S7EUS76NdsfPYidDmbSgo/https/cdn.weeb.sh/images/ByiMna_vb.gif?width=400&height=225",
        "https://images-ext-1.discordapp.net/external/MOdyFJZ0ScHVhUgxqdNcmMhC_KW4-rtvU7ECu2i0uE4/https/cdn.weeb.sh/images/SybPhp_wZ.gif?width=400&height=225",
        "https://images-ext-2.discordapp.net/external/9AXRLS0QEUSl4DAnUGuAlAvT58zwU6qobzlmi7AzAjk/https/cdn.weeb.sh/images/rkM4nTOPb.gif?width=400&height=226",
        "https://images-ext-2.discordapp.net/external/Ip5QZt8e4JVEaQk-pvzBJKP2shPhrX-AX9-KB-P87Ec/https/cdn.weeb.sh/images/SkKL3adPb.gif?width=400&height=225",
        "https://images-ext-2.discordapp.net/external/j-c0vbO4sul_FX0em3c1CG5604EIhKtLs7b-_QpaE9U/https/cdn.weeb.sh/images/rJoL2pdvb.gif",                    
        "https://images-ext-1.discordapp.net/external/ThBYZHONG_1x-dRf3A-6KbOEfuPCW1FN088LYg8S1yk/https/cdn.weeb.sh/images/HkZyXs3A-.gif?width=400&height=188",
        "https://images-ext-1.discordapp.net/external/7LD8qgHexL0HAmgk8BUrLZamBtBKO1cmcZNshO2l57A/https/cdn.weeb.sh/images/BJSdQRtFZ.gif?width=400&height=225",
        "https://images-ext-2.discordapp.net/external/jrwsDnvFNgdS26mOJp7Qkf189nQsEiK76zMcV0W5J94/https/cdn.weeb.sh/images/HJlWhpdw-.gif?width=401&height=226",                                                                                                                                          
        "https://images-ext-2.discordapp.net/external/HvqSRBKzOj9xqaA-YA0mZj6lJxQYDtK3v-njdGXAPFo/https/cdn.weeb.sh/images/r1cB3aOwW.gif?width=400&height=225",
        "https://images-ext-2.discordapp.net/external/VifcQbfsqonWWB__ilnjlrKEESMPoQLoFLQnU_rDks8/https/cdn.weeb.sh/images/BydoCy9yG.gif?width=400&height=225",
        "https://images-ext-1.discordapp.net/external/MTVSndEGkNUYyl4nUGhfD7pBYzhO1ycHZylGIE3XFoA/https/cdn.weeb.sh/images/rypMnpuvW.gif?width=400&height=221",
        "https://images-ext-1.discordapp.net/external/QpAMcOT_8UCpULOXI05AJJz6nQMGfhA-xocRnydZXbs/https/cdn.weeb.sh/images/B1MJ2aODb.gif?width=400&height=225",
        "https://images-ext-1.discordapp.net/external/TemrF8qZtvVlYXeHyfWfu6EQPiAQzAwG6v8k_aNR8vY/https/cdn.weeb.sh/images/B13D2aOwW.gif?width=400&height=219",
    ];
    var kisss = message.content.substring(6);

    const kissembed = new Discord.RichEmbed()
    .setColor("#FF69B4")
    .setDescription(message.author.toString() + " passionately kissed you " + kisss)
    .setImage(kiss[Math.floor(Math.random() * kiss.length)])
    message.channel.send(kissembed)
}

}

        talkedRecently.add(message.author.id);
        setTimeout(() => {
          // Removes the user from the set after a minute
          talkedRecently.delete(message.author.id);
        }, 30000);
    }

module.exports.config = {
  name: "kiss",
  category: "actions",
  description: "kiss someone",
  usage: "kiss",
  aliases: ["smooch"]
};