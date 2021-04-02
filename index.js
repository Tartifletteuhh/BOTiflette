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
let oldMoyenne = 0
var b = 100

client.on('ready', function() {
    console.log("prêt !")
})
client.on('ready', () => {
    client.user.setPresence({ activity: { name: 'One Piece', type: 'WATCHING' }, status: 'dnd' })
})

client.on('message', message => {

    var res = message.content
    var rip = res.toLowerCase().split(" ");

    if(rip[0].toLowerCase() === "!sethumour") {
        b = rip[1]
        message.channel.send(
            exampleEmbed = new Discord.MessageEmbed()
            .setColor('#FFC0CB')
            .setTitle(`Nouvelle valeur : ${b}`))
    }

    if(rip[0].toLowerCase() === "!varhumour") {
        message.channel.send(
            exampleEmbed = new Discord.MessageEmbed()
            .setColor('#FFC0CB')
            .setTitle(`Mon humour est de valeur : ${b}`))
    }

})


client.on('message', message =>{
        
    /*if(message.channel.id === "623628342528049153") {
        return
    }*/

    let a=Math.floor(Math.random() * 100)

    var res = message.content
    /*res = res.replaceAll('*','')
    res = res.replaceAll('~','')
    res = res.replaceAll('_','')
    res = res.replaceAll('|','')
    res = res.replaceAll('`','')*/

    var rip = res.toLowerCase().split(" ");
    var mot = [rip[rip.length - 2],rip[rip.length - 1]]

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

        if(a < b){
            message.channel.send('stiti')
            console.log("stiti")
        }
    }
    if(mot[0] === "non" || mot[1] === "non") {
        
        if(a < b){
            message.channel.send('si')
            console.log("si")
        }
    }
    if(mot[0] === "nan" || mot[1] === "nan") {
        
        if(a < b){
            message.channel.send('cy')
            console.log("cy")
        }
    }
    if(mot[0] === "quoi" || mot[1] === "quoi") {
     
        if(a < b){
            message.channel.send('feur')
            console.log("feur")
        }
    }
    if(mot[0] === "comment" || mot[1] === "comment") {
     
        if(a < b){
            message.channel.send('dent')
            console.log("dent")
        }  
    }
    if(mot[0] === "wesh" || mot[1] === "wesh") {
  
        if(a < b){
            message.channel.send('dene')
            console.log("dene")
        }  
    }
    if(mot[0] === "lol" || mot[1] === "lol") {
     
        if(a < b){
            message.channel.send('ita')
            console.log("ita")
        }  
    }
})

client.on('message', message =>{

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

client.on('message', message =>{

    let a=Math.floor(Math.random() * 10)

    if(message.content.toLowerCase().includes("mort")) {
        if(a < b){
            message.channel.send("https://tenor.com/view/one-piece-monkey-d-luffy-straw-hat-luffy-zombie-rise-of-the-dead-gif-17305551")
        }
    }
})