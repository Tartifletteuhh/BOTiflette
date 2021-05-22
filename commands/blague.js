const fetch = require('node-fetch')
const { MessageEmbed } = require('discord.js')

module.exports = {
  slash: 'both',
  description: "envoie une blague !",
    callback: ({ message }) => {
      fetch('https://www.blagues-api.fr/api/random', {headers: {'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiMzE5OTI5ODk3MDIxODY1OTg1IiwibGltaXQiOjEwMCwia2V5IjoiS0g2Y2RkRW82aTZ3ajZhZXFicVpVVm9HVmdMbVpwdWw4YWJxZEs1V1BiRFVRWFFYcEsiLCJjcmVhdGVkX2F0IjoiMjAyMS0wNS0yMlQxODo1MTozMiswMDowMCIsImlhdCI6MTYyMTcwOTQ5Mn0.VhO_mGBrZ6yq_1cClcYzvorknIBmHJHQyME4r6yn7zM`}})
        .then(response => response.json())
        .then(data => {
    var joke = data.joke
    var answer = data.answer
    
    const embed = new MessageEmbed()
      .setTitle(joke)
        .setColor('#CF8523')
        .setDescription(answer)
      .setTimestamp()
    
    if (message) {
        if(message.author.bot) return
        message.channel.send('', { embed })
    }

    return embed
    })
  },
}


