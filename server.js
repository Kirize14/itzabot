const Discord = require('discord.js');

const client = new Discord.Client();

const config = require("./config.json");

let talkedRecently = new Set();

client.on('message', message => {
    
    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);

    let cmd = args.shift().toLowerCase();

    if (message.author.bot) return;

    if (!message.content.startsWith(config.prefix)) return;
    
    if (talkedRecently.has(message.author.id)) {

        message.channel.send(‘shhhhh please wait before using another command’)

        return;

    }

    talkedRecently.add(message.author.id);

    setTimeout ( () => {

        talkedRecently.delete(message.author.id);

    }, 3000);

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
