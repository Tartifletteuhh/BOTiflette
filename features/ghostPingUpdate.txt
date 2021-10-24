const { MessageEmbed } = require('discord.js')

module.exports = (client) => {
    client.on('messageUpdate', (oldMessage, newMessage) => {
    if (!oldMessage.author || oldMessage.author.bot || oldMessage.guild.id === '623628341940977674') return

    if (oldMessage.mentions.users.size === 0 && oldMessage.mentions.roles.size === 0 && !oldMessage.mentions.everyone) return

    if(oldMessage.mentions.users.first() !== newMessage.mentions.users.first() || oldMessage.mentions.roles.first() !== newMessage.mentions.roles.first()) {
        const embed = new MessageEmbed()
            .setColor('#CF8523')
            .setTitle('GhostPing détecté\n(message modifié)')
            .setDescription(`Ancien message :\n"${oldMessage.content}"\nNouveau message :\n"${newMessage.content}"`)
            .addFields(
                {name: 'Channel', value: oldMessage.channel},
                {name: 'Auteur', value: oldMessage.author}
        )
        oldMessage.channel.send(embed)
    }
    })
}