const { MessageEmbed } = require('discord.js')

module.exports = {
  slash: 'both',
  description: "envoie mon taux d'humour !",
  callback: ({ message }) => {
    console.log(`Mon humour est de valeur : ${tauxHumour}`)
    const embed = new MessageEmbed()
    .setTitle(`Mon humour est de valeur : ${tauxHumour}`)
    .setColor('#FFC0CB')
    .setTimestamp()

    if (message) {
        if(message.author.bot) return

        message.delete()
        message.channel.send('', { embed })
    }

    return embed
  },
}

