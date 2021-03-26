const Discord = require('discord.js')
const pronote = require('pronote-api')
const client = new Discord.Client()
client.login('NzM1NDc3MDUwNTc5NjE1NzU0.Xxg0YQ.haiX_5QZUKlnRTC-tRox5qRZGyM')
const PREFIX = "!"





const facteur = 2
const url = 'https://0880021v.index-education.net/pronote/'
const username = 'nathanael.claudon'
const password = 'nanate88'
const cas = 'ac-nancy-metz'
let a=1
let oldMoyenne = 0






client.on('ready', function() {
    console.log("prêt !")
})
client.on('ready', () => {
    client.user.setPresence({ activity: { name: 'One Piece', type: 'WATCHING' }, status: 'dnd' })
})


client.on('message', message =>{
    /*if(message.channel.id === "623628342528049153") {
        return
    }*/
    var res = message.content.toLowerCase().split(" ");
    var mot = [res[res.length - 2],res[res.length - 1]]
    var trigger = ["oui","non","nan","quoi","comment","lol","wesh"]
    function isLetter(c) {
        return c.toLowerCase() != c.toUpperCase();
    }
    if(isLetter(mot[1]) === true && !trigger.includes(mot[1])) {
        return
    }


    
    if(message.content[0] === PREFIX) {
        if(message.content === '!hello') {
            message.channel.send('world !')
            console.log("world !")
        }
    }
    if(mot[0] === "oui" || mot[1] === "oui") {

        if(a === 1){
            message.channel.send('stiti')
            console.log("stiti")
        }
    }
    if(mot[0] === "non" || mot[1] === "non") {
        
        if(a === 1){
            message.channel.send('si')
            console.log("si")
        }
    }
    if(mot[0] === "nan" || mot[1] === "nan") {
        
        if(a === 1){
            message.channel.send('cy')
            console.log("cy")
        }
    }
    if(mot[0] === "quoi" || mot[1] === "quoi") {
     
        if(a === 1){
            message.channel.send('feur')
            console.log("feur")
        }
    }
    if(mot[0] === "comment" || mot[1] === "comment") {
     
        if(a === 1){
            message.channel.send('dent')
            console.log("dent")
        }  
    }
    if(mot[0] === "wesh" || mot[1] === "wesh") {
  
        if(a === 1){
            message.channel.send('dene')
            console.log("dene")
        }  
    }
    if(mot[0] === "lol" || mot[1] === "lol") {
     
        if(a === 1){
            message.channel.send('ita')
            console.log("ita")
        }  
    }

    if(message.content.toLowerCase().includes("mort")) {
        message.channel.send("https://tenor.com/view/one-piece-monkey-d-luffy-straw-hat-luffy-zombie-rise-of-the-dead-gif-17305551")
    }

    if (message.content) {                       //emote camion sur la noblesse sauf sur le général
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