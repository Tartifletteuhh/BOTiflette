const { MessageEmbed } = require('discord.js')

module.exports = {
  slash: 'both',
  description: "La liste de toutes mes commandes :D !",
    callback: ({message}) => {

        const embed = new MessageEmbed()
            .setTitle("Help !")
            .setDescription("Un résumé de toutes mes commandes !")
            .setColor('#CF8523')
            .addFields(
                { name: 'Infos', value: '**!servinfo\n!userinfo** (user)' },
                { name: 'Humour', value: "**!sethumour** <valeur> (⚠️Seulement utilisable par l'admin du bot !⚠️) \n**/ ou !varhumour** (permet de connaître la valeur d'humour du bot)" },
                { name: 'Humour --> Blague', value: '**!blague** (ID ou catégorie)\nLes catégories sont : global, dev, dark, limit, beauf, blonde' },
                { name: 'Misc', value: '**!ping\n/ ou !hello\n/ ou !help**' }
            )
          .setTimestamp()
          .setThumbnail('https://cdn.discordapp.com/emojis/643895067664187433.png?v=1')
          .setFooter('<valeur> signifie nécessaire --- (valeur) signifie optionnel')





        if (message) {
            if (message.author.bot) return
            message.delete()
            message.channel.send('', { embed })
      }
    
      return embed
    }
  }