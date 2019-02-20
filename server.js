const Discord = require('discord.js');

const client = new Discord.Client();

const config = require("./config.json");

client.on('message', message => {
    
    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);

    let cmd = args.shift().toLowerCase();

    if (message.author.bot) return;

    if (!message.content.startsWith(config.prefix)) return;

    try {

        delete require.cache[require.resolve(`./commands/${cmd}.js`)];

        let ops = {
            ownerID: config.ownerID
        }

        let commandFile = require(`./commands/${cmd}.js`);

        commandFile.run(client, message, args, ops);

    } catch (e) {

        console.log(e.stack);

    }

});

client.on('ready', () => {

    console.log('Bot has been started!!!!!!!!!!');

});

const token = config.token;

client.login(token);