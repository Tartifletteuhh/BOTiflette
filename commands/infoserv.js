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
            .setTitle(`Server info for "${name}"`)
            .setThumbnail(icon)
            .addFields(
            {
                name: 'Region',
                value: region,
            },
            {
                name: 'Members',
                value: memberCount,
            },
            {
                name: 'Owner',
                value: "@" + owner.user.tag,
            }
            )

        message.channel.send(embed)
        
      }
    }
  }