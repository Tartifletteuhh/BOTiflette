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
    client.user.setPresence({ activity: { name: 'Franck', type: 'WATCHING' }, status: 'dnd' })
})







client.on('message', message =>{
    if(message.content[0] === PREFIX) {
        if(message.content === '!hello') {
            message.channel.send('world !')
            console.log("world !")
        }
    }
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
    if(message.content.toLowerCase() === "lol") {
        if(message.channel.id === "623628342528049153") {
            return
        }
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





async function main(){
    
    const session = await pronote.login(url, username, password, cas) 
    session.setKeepAlive(true)
    function bouclePronote () {
        session.setKeepAlive(false)
        session.setKeepAlive(true)
    }
    setInterval(bouclePronote, 3600000)

    const timetable = await session.timetable()
    const marks = await session.marks()

    const pronoteEmbed = new Discord.MessageEmbed()
        .setTitle(`Tu as ${timetable.length} heures de cours aujourd'hui.`)
        .setAuthor(`${session.user.name}, ${session.user.studentClass.name}`)
        .setDescription(`${marks.averages.student} de moyenne générale actuellement.`)

    client.on('message', message => {
        if (message.content.toLocaleLowerCase() === "pronote"){
            if (message.guild.id !== "722748727764320317") {
                return
            }
            message.channel.send(pronoteEmbed);
        }
    })



    
    
    if(marks.averages.student !== oldMoyenne) {
        const moyenneEmbed = new Discord.MessageEmbed()
            .setTitle(`Moyenne mise à jour : ${marks.averages.student}`)
        //client.channels.cache.get('722748727764320320').send(moyenneEmbed)
        client.users.cache.get('319929897021865985').send(moyenneEmbed)
        oldMoyenne = marks.averages.student
    }


}




main().catch(err => {
    if (err.code === pronote.errors.WRONG_CREDENTIALS.code) {
        console.error('Mauvais identifiants');    
    } else {
        console.error(err);
    }
});









