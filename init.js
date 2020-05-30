const main = require('./main.js')
    const config = require('./config.json')
module.exports.init = function(rpclient, client, request){
	console.log('» Discord Customization script loaded.\n» Repository: https://github.com/radeberyt/discord-customization\n» Discord: S1mpleRadeber#6781');
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
}