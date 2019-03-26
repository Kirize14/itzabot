exports.run = (client, message, args, ops) => {

    message.delete();

    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply(`You don't have "Manage Message" permission!`);

    let ch = message.mentions.channels.first();

    let argsres;

    if (ch) {

        argsres = args.slice(1).join(' ')

        ch.send(argsres)

    } else {

        argsres = args.join(' ')

        message.channel.send(argsres)

    }

};
