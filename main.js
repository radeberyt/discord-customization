const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log('Watching status loaded');
});
client.on('message', message => {
	if(message.author == client.user){
		message.edit("**" + message.content + "**")
	}
	if(message.content.startsWith("m!setstatus")){
		   client.user.setPresence({
        game: {
            name: '» ' + message.content.split("m!setstatus").join(" "), // you can remove » it just looks better :)
            type: "WATCHING" // WATCHING, PLAYING, STREAMING, LISTENING
        }
    });
	}
});
client.login('USER TOKEN');
