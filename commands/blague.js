const fetch = require('node-fetch')
const { MessageEmbed } = require('discord.js')
const fonctions = require("../fonctions.js")
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiMzE5OTI5ODk3MDIxODY1OTg1IiwibGltaXQiOjEwMCwia2V5IjoiS0g2Y2RkRW82aTZ3ajZhZXFicVpVVm9HVmdMbVpwdWw4YWJxZEs1V1BiRFVRWFFYcEsiLCJjcmVhdGVkX2F0IjoiMjAyMS0wNS0yMlQxODo1MTozMiswMDowMCIsImlhdCI6MTYyMTcwOTQ5Mn0.VhO_mGBrZ6yq_1cClcYzvorknIBmHJHQyME4r6yn7zM'

blagueFunc = (message, site) => {
  fetch(site, {headers: {'Authorization': `Bearer ${token}`}})
        .then(response => response.json())
        .then(data => {

          const embed = new MessageEmbed()
            .setTitle(data.joke)
            .setDescription('||'+data.answer+'||')
            .setFooter(`Catégorie : ${data.type} --- ID : ${data.id}`)
            .setColor('#CF8523')
            .setTimestamp()
            .setThumbnail('https://cdn.discordapp.com/emojis/643895067664187433.png?v=1')
          if(message.author.bot) return
          message.channel.send('', { embed })

        })
}

module.exports = {
  expectedArgs: '<arg>',
  cooldown: '5s',
  callback: ({ message, args }) => {
    var [arg] = args

    if (fonctions.chanelcours(message)) return

    if (!arg) {
      blagueFunc(message, 'https://www.blagues-api.fr/api/random')
    } else {
      
      if(fonctions.isLetter(arg)){
        if (arg !== 'global' && arg !== 'dev' && arg !== 'dark' && arg !== 'limit' && arg !== 'beauf' && arg !== 'blonde') {
          message.channel.send('Mauvais argument renseigné, recommence.')
          return
        }
      }

      if (arg === 'blonde') arg = 'blondes'

      switch (arg) {

        case 'global':
          blagueFunc(message, `https://www.blagues-api.fr/api/type/${arg}/random`)
          break
        
        case 'dev':
          blagueFunc(message, `https://www.blagues-api.fr/api/type/${arg}/random`)
          break

        case 'dark':
          blagueFunc(message, `https://www.blagues-api.fr/api/type/${arg}/random`)
          break

        case 'limit':
          blagueFunc(message, `https://www.blagues-api.fr/api/type/${arg}/random`)
          break

        case 'beauf':
          blagueFunc(message, `https://www.blagues-api.fr/api/type/${arg}/random`)
          break

        case 'blondes':
          blagueFunc(message, `https://www.blagues-api.fr/api/type/${arg}/random`)
          break

        default:
          blagueFunc(message, `https://www.blagues-api.fr/api/id/${arg}`)
          
      }

    }
  },
}