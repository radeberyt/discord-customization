

module.exports.onBotReady = function(){
	console.log('» Discord Customization script loaded! Made by S1mpleRadeber#6781 from Russia <3.');
}

module.exports.onMessage = function(config, message){
	if(message.author == client.user){
        if(config.chat.bold_enabled){
          message.edit("**" + message.content + "**")
        }
        if(config.chat.italic_enabled){
          message.edit("*" + message.content + "*")
        }
        if(config.chat.underlined_enabled){
          message.edit("__" + message.content + "__")
        }
        if(config.chat.bold_enabled && config.chat.italic_enabled){
          message.edit("***" + message.content + "***")
        }
        if(config.chat.bold_enabled && config.chat.underlined_enabled){
          message.edit("__**" + message.content + "**__")
        }
        if(config.chat.bold_enabled && config.chat.underlined_enabled && config.chat.italic_enabled){
          message.edit("__***" + message.content + "***__")
        }
    }
    message.delete();
    if(message.content.startsWith("m!setstatus")){
           client.user.setPresence({
        game: {
            name: config.status.prefix + ' ' + message.content.split("m!setstatus").join(" "), // you can remove » it just looks better :)
            type: config.status.type
        }
    });
    }
}