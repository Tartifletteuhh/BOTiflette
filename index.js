const Discord = require('discord.js')
const bot = new Discord.Client()

const PREFIX = "!"
const facteur = 2

bot.on('ready', function() {
    console.log("prêt !")
})
bot.on('ready', () => {
    bot.user.setPresence({ activity: { name: 'Franck', type: 'WATCHING' }, status: 'dnd' })
})

bot.on('message', message => {
    if(message.content[0] === PREFIX) {
        if(message.content === '!hello') {
            message.channel.send('world !')
            console.log("world !")
        }
    }
})

a=Math.floor(Math.random() * facteur)

bot.on('message', message =>{
    if(message.content.toLowerCase() === "oui") {
        if(message.channel.id === "623628342528049153") {
            return
        }
        if(a === 1){
            message.channel.send('stiti')
            console.log("stiti")
        }
    }
    if(message.content.toLowerCase() === "non") {
        if(message.channel.id === "623628342528049153") {
            return
        }
        if(a === 1){
            message.channel.send('si')
            console.log("si")
        }
    }
    if(message.content.toLowerCase() === "nan") {
        if(message.channel.id === "623628342528049153") {
            return
        }
        if(a === 1){
            message.channel.send('cy')
            console.log("cy")
        }
    }
    if(message.content.toLowerCase() === "quoi") {
        if(message.channel.id === "623628342528049153") {
            return
        }
        if(a === 1){
            message.channel.send('ffeur')
            console.log("ffeur")
        }
    }
    if(message.content.toLowerCase() === "quoi ?") {
        if(message.channel.id === "623628342528049153") {
            return
        }
        if(a === 1){
            message.channel.send('ffeur')
            console.log("ffeur")
        }
    }
    if(message.content.toLowerCase() === "comment") {
        if(message.channel.id === "623628342528049153") {
            return
        }
        if(a === 1){
            message.channel.send('dent')
            console.log("dent")
        }  
    }
    if(message.content.toLowerCase() === "comment ?") {
        if(message.channel.id === "623628342528049153") {
            return
        }
        if(a === 1){
            message.channel.send('dent')
            console.log("dent")
        }  
    }
    if(message.content.toLowerCase() === "wesh") {
        if(message.channel.id === "623628342528049153") {
            return
        }
        if(a === 1){
            message.channel.send('dene')
            console.log("dene")
        }  
    }
})

bot.on('message', message => {
    if (message.content) {
        if(message.channel.id === "623628342528049153") {
            return
        }
        if(message.guild.id !== "623628341940977674") {
            return
        }
        const reactionEmoji = message.guild.emojis.cache.find(emoji => emoji.name === 'Camion')
        message.react(reactionEmoji)
    }
})

bot.login('NzM1NDc3MDUwNTc5NjE1NzU0.Xxg0YQ.haiX_5QZUKlnRTC-tRox5qRZGyM')