try {
const config = require('./config.json')
const Discord = require('discord.js');
const client = new Discord.Client();
const rpclient = require('discord-rich-presence')(config.richpresence.client_id);
const init = require('./init')
const events = require('./events')

// Init
init.init(rpclient, client)

// On Ready
client.on('ready', () => {
  events.onBotReady()
});

// On Message
client.on('message', message => {
    events.onMessage(config, message)
});
}
catch(e){
    console.error("[ERROR] An error happened while running discord Customization script: \n" + e)
}