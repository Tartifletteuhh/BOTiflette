const { MessageEmbed } = require('discord.js')

module.exports = {
  slash: 'both',
  description: "créateur, modifie mon humour !",
  testOnly: true,
  minArgs: 1,
  expectedArgs: '<humour>',
  callback: ({ message, args }) => {
    const [humour] = args
    tauxHumour = humour
    console.log(`Nouvelle valeur : ${tauxHumour}`)
    const embed = new MessageEmbed()
    .setTitle(`Nouvelle valeur : ${tauxHumour}`)
    .setColor('#FFC0CB')

    if (message) {
        if(message.author.bot) return
        /*if (message.author.id !== '319929897021865985') {
            message.channel.send(
                exampleEmbed = new Discord.MessageEmbed()
                .setColor('#FFC0CB')
                .setTitle('Seul mon créateur peut modifier mon humour, désolé !'))
            console.log(`pas les perms humour`)
            return
        }*/
        tauxHumour = humour
        message.channel.send('', { embed })
    }

    return embed
  },
}