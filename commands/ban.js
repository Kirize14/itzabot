exports.run = (client, message, args, ops) => {

    message.delete();

    if (!message.member.hasPermission("BAN_MEMBERS")) return message.reply(`You don't have "Ban Member" permission!`).then(msg => msg.delete(5000));

    let user = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));

    if (!user) return message.reply('User Not Found!').then(msg => msg.delete(5000));

    if (user.hasPermission("ADMINISTRATOR")) return message.channel.send("Nope you can't ban").then( msg => msg.delete(5000));

    let reason = args.join(' ').slice(22);

    if (!reason) reason = 'No reason.';
    
    message.channel.send(`Bye ` + user + ` .`).then(msg => msg.delete(5000));
    
    message.guild.member(user).ban(reason);

}