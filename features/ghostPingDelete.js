const { MessageEmbed } = require('discord.js')

module.exports = (client) => {
    client.on('messageDelete', (message) => {
        if (!message.author || message.author.bot || message.guild.id === '623628341940977674') return
        if (message.mentions.users.size === 0 && message.mentions.roles.size === 0 && !message.mentions.everyone) return
        
        const embed = new MessageEmbed()
            .setColor('#CF8523')
            .setTitle('GhostPing détecté\n(message supprimé)')
            .setDescription(`Message :\n"${message.content}"`)
            .addFields(
                {name: 'Channel', value: message.channel},
                {name: 'Auteur', value: message.author}
            )
        message.channel.send(embed)
    })
}