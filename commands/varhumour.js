const { MessageEmbed } = require('discord.js')

module.exports = {
  callback: ({ message }) => {
    console.log(`Mon humour est de valeur : ${tauxHumour}`)
    const embed = new MessageEmbed()
      .setTitle(`Mon humour est de valeur : ${tauxHumour}`)
      .setColor('#CF8523')
      .setTimestamp()
      .setThumbnail('https://cdn.discordapp.com/emojis/643895067664187433.png?v=1')

    if (message) {
        if(message.author.bot) return

        message.delete()
        message.channel.send('', { embed })
    }

    return embed
  },
}

