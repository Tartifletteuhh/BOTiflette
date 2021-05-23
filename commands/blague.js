const fetch = require('node-fetch')
const { MessageEmbed } = require('discord.js')
const fonctions = require("../fonctions.js")
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiMzE5OTI5ODk3MDIxODY1OTg1IiwibGltaXQiOjEwMCwia2V5IjoiS0g2Y2RkRW82aTZ3ajZhZXFicVpVVm9HVmdMbVpwdWw4YWJxZEs1V1BiRFVRWFFYcEsiLCJjcmVhdGVkX2F0IjoiMjAyMS0wNS0yMlQxODo1MTozMiswMDowMCIsImlhdCI6MTYyMTcwOTQ5Mn0.VhO_mGBrZ6yq_1cClcYzvorknIBmHJHQyME4r6yn7zM'

module.exports = {
  expectedArgs: '<arg>',
  callback: ({ message, args }) => {
    const [arg] = args
    if (!arg) {
      
      fetch('https://www.blagues-api.fr/api/random', {headers: {'Authorization': `Bearer ${token}`}})
        .then(response => response.json())
        .then(data => {

          const embed = new MessageEmbed()
            .setTitle(data.joke)
            .setDescription(data.answer)
            .setFooter(`Catégorie : ${data.type} --- ID : ${data.id}`)
            .setColor('#CF8523')
            .setTimestamp()
          if(message.author.bot) return
          message.channel.send('', { embed })

        })
      
    } else {

      if(fonctions.isLetter(arg)){
        if (arg !== 'global' && arg !== 'dev' && arg !== 'dark' && arg !== 'limit' && arg !== 'beauf' && arg !== 'blondes') {
          message.channel.send('Mauvais argument renseigné, recommence.')
          return
        }
      }
      switch (arg) {

        case 'global':
          fetch(`https://www.blagues-api.fr/api/type/${arg}/random`, {headers: {'Authorization': `Bearer ${token}`}})
          .then(response => response.json())
          .then(data => {

            const embed = new MessageEmbed()
              .setTitle(data.joke)
              .setDescription(data.answer)
              .setFooter(`Catégorie : ${data.type} --- ID : ${data.id}`)
              .setColor('#CF8523')
              .setTimestamp()
            if(message.author.bot) return
            message.channel.send('', { embed })
            
          })
          break
        
        case 'dev':
          fetch(`https://www.blagues-api.fr/api/type/${arg}/random`, {headers: {'Authorization': `Bearer ${token}`}})
          .then(response => response.json())
          .then(data => {

            const embed = new MessageEmbed()
              .setTitle(data.joke)
              .setDescription(data.answer)
              .setFooter(`Catégorie : ${data.type} --- ID : ${data.id}`)
              .setColor('#CF8523')
              .setTimestamp()
            if(message.author.bot) return
            message.channel.send('', { embed })
            
          })
          break

        case 'dark':
          fetch(`https://www.blagues-api.fr/api/type/${arg}/random`, {headers: {'Authorization': `Bearer ${token}`}})
          .then(response => response.json())
          .then(data => {

            const embed = new MessageEmbed()
              .setTitle(data.joke)
              .setDescription(data.answer)
              .setFooter(`Catégorie : ${data.type} --- ID : ${data.id}`)
              .setColor('#CF8523')
              .setTimestamp()
            if(message.author.bot) return
            message.channel.send('', { embed })
            
          })
          break

        case 'limit':
          fetch(`https://www.blagues-api.fr/api/type/${arg}/random`, {headers: {'Authorization': `Bearer ${token}`}})
          .then(response => response.json())
          .then(data => {

            const embed = new MessageEmbed()
              .setTitle(data.joke)
              .setDescription(data.answer)
              .setFooter(`Catégorie : ${data.type} --- ID : ${data.id}`)
              .setColor('#CF8523')
              .setTimestamp()
            if(message.author.bot) return
            message.channel.send('', { embed })
            
          })
          break

        case 'beauf':
          fetch(`https://www.blagues-api.fr/api/type/${arg}/random`, {headers: {'Authorization': `Bearer ${token}`}})
          .then(response => response.json())
          .then(data => {

            const embed = new MessageEmbed()
              .setTitle(data.joke)
              .setDescription(data.answer)
              .setFooter(`Catégorie : ${data.type} --- ID : ${data.id}`)
              .setColor('#CF8523')
              .setTimestamp()
            if(message.author.bot) return
            message.channel.send('', { embed })
            
          })
          break

        case 'blondes':
          fetch(`https://www.blagues-api.fr/api/type/${arg}/random`, {headers: {'Authorization': `Bearer ${token}`}})
          .then(response => response.json())
          .then(data => {

            const embed = new MessageEmbed()
              .setTitle(data.joke)
              .setDescription(data.answer)
              .setFooter(`Catégorie : ${data.type} --- ID : ${data.id}`)
              .setColor('#CF8523')
              .setTimestamp()
            if(message.author.bot) return
            message.channel.send('', { embed })
            
          })
          break

        default:
          fetch(`https://www.blagues-api.fr/api/id/${arg}`, {headers: {'Authorization': `Bearer ${token}`}})
          .then(response => response.json())
          .then(data => {

            const embed = new MessageEmbed()
              .setTitle(data.joke)
              .setDescription(data.answer)
              .setFooter(`Catégorie : ${data.type} --- ID : ${data.id}`)
              .setColor('#CF8523')
              .setTimestamp()
            if(message.author.bot) return
            message.channel.send('', { embed })

        })
          
      }

    }
  },
}