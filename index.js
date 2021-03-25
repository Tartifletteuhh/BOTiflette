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


/*
function LaNoblesseGénéral() {
    if(message.channel.id === "623628342528049153") {
        return
    }
}
*/


client.on('message', message =>{
    var str = message.content.toLowerCase;
    var res = str.split(" ");
    var mot1 = res[res.length - 1]
    var mot2 = res[res.length - 2]
    if(message.content[0] === PREFIX) {
        if(message.content === '!hello') {
            message.channel.send('world !')
            console.log("world !")
        }
    }
    if(mot1 === "oui"|| mot2 === "oui") {
        LaNoblesseGénéral()
        if(a === 1){
            message.channel.send('stiti')
            console.log("stiti")
        }
    }
    if(mot1 === "non"|| mot2 === "non") {
        LaNoblesseGénéral
        if(a === 1){
            message.channel.send('si')
            console.log("si")
        }
    }
    if(mot1 === "nan"|| mot2 === "nan") {
        LaNoblesseGénéral
        if(a === 1){
            message.channel.send('cy')
            console.log("cy")
        }
    }
    if(mot1 === "quoi"|| mot2 === "quoi") {
        LaNoblesseGénéral
        if(a === 1){
            message.channel.send('feur')
            console.log("feur")
        }
    }
    if(mot1 === "comment"|| mot2 === "comment") {
        LaNoblesseGénéral
        if(a === 1){
            message.channel.send('dent')
            console.log("dent")
        }  
    }
    if(mot1 === "wesh"|| mot2 === "wesh") {
        LaNoblesseGénéral
        if(a === 1){
            message.channel.send('dene')
            console.log("dene")
        }  
    }
    if(mot1 === "lol"|| mot2 === "lol") {
        LaNoblesseGénéral
        if(a === 1){
            message.channel.send('ita')
            console.log("ita")
        }  
    }



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



