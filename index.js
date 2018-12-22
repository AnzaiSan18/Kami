const botconfig = require("./botconfig.json")
const Discord = require("discord.js");
const weather = require("weather-js");
const superagent = require("superagent");
const urban = require("relevant-urban");
const moment = require("moment");
const fs = require("fs");
const ms = require("ms");
const Jimp = require("jimp")
const ownerID = "374245145329139712";
const prefix = botconfig.prefix;
const YouTube = require('simple-youtube-api');
const ytdl = require('ytdl-core');
const youtube = new YouTube('AIzaSyCbOcB5Mv31y3LogBrCJvdn-Vynb3_M4nM');
const queue = new Map();

const bot = new Discord.Client({ disableEveryone: true });

bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();

var servers = {};

fs.readdir("./commands/", (err, files) => {

    if (err) console.log(err)

    let jsfile = files.filter(f => f.split(".").pop() === "js")
    if (jsfile.length <= 0) {
        return console.log("[LOGS] Couldn't Find Commands!");
    }

    console.log(`Loading ${jsfile.length} commands`);

    jsfile.forEach((f, i) => {
        let pull = require(`./commands/${f}`);
        console.log(`${i + 1}: ${f} loaded!`)
        bot.commands.set(pull.config.name, pull);
        pull.config.aliases.forEach(alias => {
            bot.aliases.set(alias, pull.config.name)
        });
    });
});

function changing_status() {
	setInterval(async () => {
		const statuslist = [
		  `t>help | ${bot.guilds.size} guilds`,
		  `t>help | ${bot.channels.size} channels`,
		  `t>help | ${bot.users.size} users`,
		  `t>help | With Boobs`,
		  `t>help | Your wife\'s ass`,
		  `t>help | Death is imminent`
		];
		const random = Math.floor(Math.random() * statuslist.length);
	
		try {
		  await bot.user.setPresence({
			game: {
			  name: `${statuslist[random]}`,
			  type: "PLAYING"
			},
			status: "online"
		  });
		} catch (error) {
		  console.error(error);
		}
	  }, 10000);
	}

bot.on("ready", () => {
    console.log(`${bot.user.username} is online!`)
    setInterval(changing_status, 15000);
});


bot.on("message", async message => {
    if (message.author.bot) return;
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);

    let commandfile = bot.commands.get(cmd.slice(prefix.length)) || bot.commands.get(bot.aliases.get(cmd.slice(prefix.length)))
    if (commandfile) commandfile.run(bot, message, args)


    let msg = message.content.toUpperCase();
	let sender = message.author;
	if (message.channel.type === "dm") {
        let embed = new Discord.RichEmbed()
            .setTimestamp()
            .setTitle("Direct Message To The Bot")
            .addField(`Sent By:`, sender)
            .setColor("RANDOM")
            .setThumbnail(message.author.displayAvatarURL)
            .addField(`Message: `, message.content)
            .setFooter(`DM Bot Messages | DM Logs`)
        bot.users.get("330985766668992512").send(embed)
    }


    if (message.content.startsWith(`${botconfig.prefix}setavatar`)) {
        let messageArray = message.content.split(" ");
        let command = messageArray[0]
        if (!command.startsWith(botconfig.prefix)) return;
        const args = messageArray.slice(1);
        let botmessage = args.join(" ");
        if (!message.author.id === '330985766668992512') return message.reply("Only my owner can use this!!");


        let image = message.attachments.first().url;


        bot.user.setAvatar(image);

        let iEmbed = new Discord.RichEmbed()
            .setAuthor('✅ Photo altered successfully')
            .setColor('#1E90FF')
        message.channel.send(iEmbed)


        const DBL = require("dblapi.js");
        let dbl = new DBL('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjQ5NzExMTM4ODUwMjc1MzI5MCIsImJvdCI6dHJ1ZSwiaWF0IjoxNTM4NzQ5NzY4fQ._siea1X5OH0GXebBeuUwfVG4iq4nVHECAVJIUiRh8dc', bot);
        dbl.on('posted', () => {
            console.log('Server count posted!');
        })

        dbl.on('error', e => {
            console.log(`Oops! ${e}`);
        })
    }
})
 
bot.on("message", async message => {
    var args = message.content.substring(prefix.length).split(" ");
    if (!message.content.startsWith(prefix)) return;
  var searchString = args.slice(1).join(' ');
	var url = args[1] ? args[1].replace(/<(.+)>/g, '$1') : '';
	var serverQueue = queue.get(message.guild.id);
    switch (args[0].toLowerCase()) {
      case "play":
    var voiceChannel = message.member.voiceChannel;
      if (url.match(/^https?:\/\/(www.youtube.com|youtube.com)\/playlist(.*)$/)) {
			var playlist = await youtube.getPlaylist(url);
			var videos = await playlist.getVideos();
			for (const video of Object.values(videos)) {
				var video2 = await youtube.getVideoByID(video.id); // eslint-disable-line no-await-in-loop
				await handleVideo(video2, message, voiceChannel, true); // eslint-disable-line no-await-in-loop
			}
			return message.channel.send(`✅ Playlist: **${playlist.title}** has been added to the queue!`);
		} else {
			try {
				var video = await youtube.getVideo(url);
			} catch (error) {
				try {
					var videos = await youtube.searchVideos(searchString, 10);
					var index = 0;
					message.channel.send(`
__**Song selection:**__
${videos.map(video2 => `**${++index} -** ${video2.title}`).join('\n')}
Please provide a value to select one of the search results ranging from 1-10.
					`);
					// eslint-disable-next-line max-depth
					try {
						var response = await message.channel.awaitMessages(message2 => message2.content > 0 && message2.content < 11, {
							maxMatches: 1,
							time: 10000,
							errors: ['time']
						});
					} catch (err) {
						console.error(err);
						return message.channel.send('No or invalid value entered, cancelling video selection.');
					}
					var videoIndex = parseInt(response.first().content);
					var video = await youtube.getVideoByID(videos[videoIndex - 1].id);
				} catch (err) {
					console.error(err);
					return message.channel.send('🆘 I could not obtain any search results.');
				}
			}
			return handleVideo(video, message, voiceChannel);
		}
        break;
      case "skip":
		if (!message.member.voiceChannel) return message.channel.send('You are not in a voice channel!');
		if (!serverQueue) return message.channel.send('There is nothing playing that I could skip for you.');
		serverQueue.connection.dispatcher.end('Skip command has been used!');
		return undefined;
        break;
      case "stop":
		if (!message.member.voiceChannel) return message.channel.send('You are not in a voice channel!');
		if (!serverQueue) return message.channel.send('There is nothing playing that I could stop for you.');
		serverQueue.songs = [];
		serverQueue.connection.dispatcher.end('Stop command has been used!');
		return undefined;
break;
      case "volume":
		if (!message.member.voiceChannel) return message.channel.send('You are not in a voice channel!');
		if (!serverQueue) return message.channel.send('There is nothing playing.');
		if (!args[1]) return message.channel.send(`The current volume is: **${serverQueue.volume}**`);
		serverQueue.volume = args[1];
		serverQueue.connection.dispatcher.setVolumeLogarithmic(args[1] / 5);
		return message.channel.send(`I set the volume to: **${args[1]}**`);
break;
      case "np":
		if (!serverQueue) return message.channel.send('There is nothing playing.');
		return message.channel.send(`🎶 Now playing: **${serverQueue.songs[0].title}**`);
break;
      case "queue":
		if (!serverQueue) return message.channel.send('There is nothing playing.');
		return message.channel.send(`
__**Song queue:**__
${serverQueue.songs.map(song => `**-** ${song.title}`).join('\n')}
**Now playing:** ${serverQueue.songs[0].title}
		`);
break;
      case "pause":
		if (serverQueue && serverQueue.playing) {
			serverQueue.playing = false;
			serverQueue.connection.dispatcher.pause();
			return message.channel.send('⏸ Paused the music for you!');
		}
		return message.channel.send('There is nothing playing.');
break;
      case "resume":
		if (serverQueue && !serverQueue.playing) {
			serverQueue.playing = true;
			serverQueue.connection.dispatcher.resume();
			return message.channel.send('▶ Resumed the music for you!');
		}
		return message.channel.send('There is nothing playing.');
	

	return undefined;
break;
}
async function handleVideo(video, message, voiceChannel, playlist = false) {
	var serverQueue = queue.get(message.guild.id);
	console.log(video);
	var song = {
		id: video.id,
		title: video.title,
		url: `https://www.youtube.com/watch?v=${video.id}`
	};
	if (!serverQueue) {
		var queueConstruct = {
			textChannel: message.channel,
			voiceChannel: voiceChannel,
			connection: null,
			songs: [],
			volume: 5,
			playing: true
		};
		queue.set(message.guild.id, queueConstruct);

		queueConstruct.songs.push(song);

		try {
			var connection = await voiceChannel.join();
			queueConstruct.connection = connection;
			play(message.guild, queueConstruct.songs[0]);
		} catch (error) {
			console.error(`I could not join the voice channel: ${error}`);
			queue.delete(message.guild.id);
			return message.channel.send(`I could not join the voice channel: ${error}`);
		}
	} else {
		serverQueue.songs.push(song);
		console.log(serverQueue.songs);
		if (playlist) return undefined;
		else return message.channel.send(`✅ **${song.title}** has been added to the queue!`);
	}
	return undefined;
}
  function play(guild, song) {
	var serverQueue = queue.get(guild.id);

	if (!song) {
		serverQueue.voiceChannel.leave();
		queue.delete(guild.id);
		return;
	}
	console.log(serverQueue.songs);

	const dispatcher = serverQueue.connection.playStream(ytdl(song.url))
		.on('end', reason => {
			if (reason === 'Stream is not generating quickly enough.') console.log('Song ended.');
			else console.log(reason);
			serverQueue.songs.shift();
			play(guild, serverQueue.songs[0]);
		})
		.on('error', error => console.error(error));
	var volval;
    if (serverQueue.volume == 1) {
        volval = `○──── :loud_sound:⠀`
    }
    if (serverQueue.volume == 2) {
        volval = `─○─── :loud_sound:⠀`
    }
    if (serverQueue.volume == 3) {
        volval = `──○── :loud_sound:⠀`
    }
    if (serverQueue.volume == 4) {
        volval = `───○─ :loud_sound:⠀`
    }
    if (serverQueue.volume == 5) {
        volval = `────○ :loud_sound:⠀`
    }
    dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);
   var NowEmbed = new Discord.RichEmbed().setColor("990033")
   .addField(`=========================================================`,`
              ɴᴏᴡ ᴘʟᴀʏɪɴɢ: **${song.title}** 　 
              =========================================================`)
   serverQueue.textChannel.send(NowEmbed);
  }})



// bot.on('guildMemberAdd', member => {
//     const channel = member.guild.channels.find(ch => ch.name === 'logs');
//     if (!channel) return;
//     return channel.send(`Welcome to the server, ${member} head over to #rules to get started!`);
// });

// bot.on('guildMemberRemove', member => {
//     const goodbyechannel = member.guild.channels.find('name', 'logs')
//     return goodbyechannel.send(`${member} has left the server`);
// });

// bot.on('guildBanAdd', (guild, user) => {
//     const logschannel = guild.channels.find(ch => ch.name === 'logs');
//     return logschannel.send(`${user.username} was just banned!`);
// });

// bot.on('guildBanRemove', (guild, user) => {
//     const logschannel = guild.channels.find(ch => ch.name === 'logs');
//     return logschannel.send(`${user.username} was just unbanned!`);
// });

// bot.on("channelCreate", async channel => {
//     var logs = channel.guild.channels.find(c => c.name === 'logs');
//     if (!logs) return console.log("Can't find logs channel.");
//     const cembed = new Discord.RichEmbed()
//         .setTitle("Channel Created")
//         .setColor("RANDOM")
//         .setDescription(`A **${channel.type} channel**, by the name of **${channel.name}**, was just created!`)
//         .setTimestamp(new Date());
//     logs.send(cembed)
// });

// bot.on("channelDelete", async channel => {
//     var logs = channel.guild.channels.find(c => c.name === 'logs');
//     if (!logs) return console.log("Can't find logs channel.");
//     const cembed = new Discord.RichEmbed()
//         .setTitle("Channel Deleted")
//         .setColor("RANDOM")
//         .setDescription(`A **${channel.type} channel**, by the name of **${channel.name}**, was just deleted!`)
//         .setTimestamp(new Date())
//     logs.send(cembed)
// });

// bot.on('messageDelete', async (message) => {
//     const logs = message.guild.channels.find('name', 'logs');
//     if (message.guild.me.hasPermission('MANAGE_CHANNELS') && !logs) {
//         await message.guild.createChannel('logs', 'text');
//     }
//     if (!logs) {
//         return console.log('The logs channel does not exist and cannot be created')
//     }
//     const entry = await message.guild.fetchAuditLogs({
//         type: 'MESSAGE_DELETE'
//     }).then(audit => audit.entries.first())
//     let user;
//     if (entry.extra.channel.id === message.channel.id && (entry.target.id === message.author.id) && (entry.createdTimestamp > (Date.now() - 5000)) && (entry.extra.count >= 1)) {
//         user = entry.executor.username
//     } else {
//         user = message.author
//     }
//     const logembed = new Discord.RichEmbed()
//         //.setTitle('Message Deleted')
//         .setAuthor(user.tag, message.author.displayAvatarURL)
//         .addField(`**Message sent by ${message.author.username}> deleted in ${message.channel.name}**\n\n`, message.content)
//         .setColor(message.guild.member(bot.user).displayHexColor)
//         .setFooter(`<#${message.channel.id}>`)
//         .setTimestamp()
//     //console.log(entry)
//     logs.send(logembed);
// })
bot.login(botconfig.token)