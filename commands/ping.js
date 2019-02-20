exports.run = (client, message, args, ops) => {

    message.channel.send('Ping ' + Math.round(client.ping) + ' ms!');

}