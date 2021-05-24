const { MessageEmbed } = require('discord.js')

module.exports = {
  slash: 'both',
  description: "envoie mon lien d'invation !",
  callback: ({ message }) => {
    console.log(`lien d'invit`)
    const embed = new MessageEmbed()
      .setTitle("Mon lien d'invitation : https://discord.com/api/oauth2/authorize?client_id=735477050579615754&permissions=8&scope=applications.commands%20bot")
      .setColor('#CF8523')
      .setThumbnail('https://cdn.discordapp.com/emojis/643895067664187433.png?v=1')
      .setTimestamp()

    if (message) {
        if(message.author.bot) return

        message.delete()
        message.channel.send('', { embed })
    }

    return embed
  },
}