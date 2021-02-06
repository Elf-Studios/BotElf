const { DiscordAPIError, MessageEmbed } = require("discord.js")


module.exports = {
    name: 'ping',
    description: "this is a ping command!",
    execute(message, args , Discord){
        const PingEmbed = new Discord.MessageEmbed()
        .setTitle('Ping')
        .setColor(3066993)
        .setDescription(`🏓 Latency is ${Date.now() - message.createdTimestamp}ms`);
        message.channel.send(PingEmbed)
    }
} 