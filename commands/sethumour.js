const { MessageEmbed } = require('discord.js')

module.exports = {
  minArgs: 1,
  expectedArgs: '<humour>',
  ownerOnly: true,
  callback: ({ message, args }) => {
    const [humour] = args
    tauxHumour = humour
    console.log(`Nouvelle valeur : ${tauxHumour}`)
    const embed = new MessageEmbed()
    .setTitle(`Nouvelle valeur : ${tauxHumour}`)
    .setColor('#CF8523')
    .setTimestamp()
    
    tauxHumour = humour
    message.delete()
    message.channel.send(embed)

  },
}