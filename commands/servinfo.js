const { MessageEmbed } = require('discord.js')

module.exports = {
    callback: ({message}) => {
      console.log("infoserv")

      if (message) {
        if (message.author.bot) return
        if (!message.guild) return

        const { name, region, memberCount, owner } = message.guild
        const icon = message.guild.iconURL()

        const embed = new MessageEmbed()
            .setTitle(`Information du serveur "${name}"`)
            .setThumbnail(icon)
            .setColor('#CF8523')
            .addFields(
            {
                name: 'Region',
                value: region,
            },
            {
                name: 'Membres',
                value: memberCount,
            },
            {
                name: 'Propriétaire',
                value: "@" + owner.user.tag,
            }
            )
            .setTimestamp()

        message.channel.send(embed)
        
      }
    }
  }