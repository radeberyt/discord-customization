try {
    const config = require('./config.json')
    const Discord = require('discord.js');
const client = new Discord.Client();
const rpclient = require('discord-rich-presence')(config.richpresence.client_id);

client.on('ready', () => {
  console.log('» Discord Customization script loaded! Made by S1mpleRadeber#6781 from Russia <3');
});
client.on('message', message => {
    if(message.author == client.user){
        if(config.chat.bold_enabled){
          message.edit("**" + message.content + "**")
        }
    }
    if(message.content.startsWith("m!setstatus")){
           client.user.setPresence({
        game: {
            name: config.status.prefix + ' ' + message.content.split("m!setstatus").join(" "), // you can remove » it just looks better :)
            type: config.status.type
        }
    });
    }
});
if(config.richpresence.enabled){
rpclient.updatePresence({
  state: config.richpresence.state,
  details: config.richpresence.details,
  startTimestamp: Date.now(),
  largeImageKey: config.richpresence.largeImageKey,
  smallImageKey: config.richpresence.smallImageKey,
  instance: true
});
}

if(config.selfbot.enabled){
client.login(config.user.token);
}
else{
    return;
}
}
catch(e){
    console.error("[ERROR] An error happened while running discord Customization script: \n" + e)
}
