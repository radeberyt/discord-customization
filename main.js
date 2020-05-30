try {
const version = "v1.2";
const config = require('./config.json')
const Discord = require('discord.js');
const request = require('request');
const client = new Discord.Client();
const rpclient = require('discord-rich-presence')(config.richpresence.client_id);
const init = require('./init')
const events = require('./events')
// Init
init.init(rpclient, client, request)

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
    console.error("[ERROR] An error happened while running Discord Customization script: \n" + e)
    process.exit(1);
}