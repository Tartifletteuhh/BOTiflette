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
var b = 25

client.on('ready', function() {
    console.log("prêt !")
    client.channels.cache.get('798604848727326780').send(exampleEmbed = new Discord.MessageEmbed().setColor('#FFC0CB').setTitle('prêt !'))
})
client.on('ready', () => {
    client.user.setPresence({ activity: { name: 'One Piece', type: 'WATCHING' }, status: 'dnd' })
})

client.on('message', message => {

    var res = message.content
    var rip = res.toLowerCase().split(" ");

    if (message.author.id !== '319929897021865985') return

    if(rip[0].toLowerCase() === "!sethumour") {
        b = rip[1]
        message.channel.send(
            exampleEmbed = new Discord.MessageEmbed()
            .setColor('#FFC0CB')
            .setTitle(`Nouvelle valeur : ${b}`))
        console.log(`Nouvelle valeur : ${b}`)
    }

    if(rip[0].toLowerCase() === "!varhumour") {
        message.channel.send(
            exampleEmbed = new Discord.MessageEmbed()
            .setColor('#FFC0CB')
            .setTitle(`Mon humour est de valeur : ${b}`))
        console.log(`Mon humour est de valeur : ${b}`)
    }

})

client.on('message', message => {

    var res = message.content
    var rip = res.toLowerCase().split(" ");

    if(rip[0].toLowerCase() === "!invitme") {
        message.delete()
        message.channel.send(
            exampleEmbed = new Discord.MessageEmbed()
            .setColor('#FFC0CB')
            .setTitle("Mon lien d'invitation : https://discord.com/api/oauth2/authorize?client_id=735477050579615754&permissions=8&scope=applications.commands%20bot"))
        console.log(`lien d'invit`)
    }

})







client.api.applications('735477050579615754').commands.post({data: {
    name: 'invitme',
    description: "envoie mon lien d'invation !"
    }
})
client.api.applications('735477050579615754').commands.post({data: {
    name: 'ping',
    description: "ping pong !"
    }
})

client.ws.on('INTERACTION_CREATE', async (interaction) => {
    const command = interaction.data.name.toLowerCase()
    console.log(interaction)
    if(command === 'invitme') {
        client.api.interactions(interaction.id, interaction.token).callback.post({data: {
            type: 4,
            data: {
              content: "Mon lien d'invitation : https://discord.com/api/oauth2/authorize?client_id=735477050579615754&permissions=8&scope=applications.commands%20bot"
            }
          }})
    }
    if(command === 'ping') {
        client.api.interactions(interaction.id, interaction.token).callback.post({data: {
            type: 4,
            data: {
              content: "pong !"
            }
          }})
    }
})










client.on('message', message =>{

    let a=Math.floor(Math.random() * 100)
    if(message.author.bot) return

    let res = message.content
    res = res.split("*").join("")
    res = res.split("~").join("")
    res = res.split("_").join("")
    res = res.split("|").join("")
    res = res.split("`").join("")

    if(message.channel.parent) {
        if (message.channel.parent.name === "📂Cours") return
    }

    var rip = res.toLowerCase().split(" ");
    var mot = [rip[rip.length - 2],rip[rip.length - 1]] //le dernier et l'avant dernier mot (l'antépénultième tmtc)

    var trigger = ["oui","non","nan","quoi","comment","lol","wesh","hein","ah","cheh","bonjour"] //tout les mots qu'il voit

    function isLetter(c) {
        return c.toLowerCase() != c.toUpperCase();
    }
    if(isLetter(mot[1]) === true && !trigger.includes(mot[1])) {         //vérifie si le dernier mot contient des lettres et s'il n'est pas dans les triggers (return) par ex : si "oui mais" il ne répond pas, mais si "oui ???" il répond
        return
    }

    if(trigger.includes(mot[0]) && trigger.includes(mot[1])) {
        delete(mot[0])
    }
    
    if(message.content === '!hello') {
        message.channel.send('world !')
        console.log("world !")
    }
    if(mot.includes('oui')) {

        if(a < b){
            message.channel.send('stiti')
            console.log("stiti")
        }
    }
    if(mot.includes('non')) {
        
        if(a < b){
            message.channel.send('si')
            console.log("si")
        }
    }
    if(mot.includes('nan')) {
        
        if(a < b){
            message.channel.send('cy')
            console.log("cy")
        }
    }
    if(mot.includes('quoi')) {
     
        if(a < b){
            message.channel.send('feur')
            console.log("feur")
        }
    }
    if(mot.includes('comment')) {
     
        if(a < b){
            message.channel.send('dent')
            console.log("dent")
        }  
    }
    if(mot.includes('wesh')) {
  
        if(a < b){
            message.channel.send('dene')
            console.log("dene")
        }  
    }
    if(mot.includes('lol')) {
     
        if(a < b){
            message.channel.send('ita')
            console.log("ita")
        }  
    }
    if(mot.includes('ah')) {
     
        if(a < b){
            message.channel.send('tchoum')
            console.log("tchoum")
        }  
    }
    if(mot.includes('hein')) {
     
        if(a < b){
            message.channel.send('2')
            console.log("2")
        }  
    }
    if(mot.includes('cheh')) {
     
        if(a < b){
            message.channel.send('vre')
            console.log("vre")
        }  
    }
    if(mot.includes('bonjour')) {
     
        if(a < b){
            message.channel.send('au revoir')
            console.log("au revoir")
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

    if(message.channel.parent) {
        if (message.channel.parent.name === "📂Cours") return
    }

    let a=Math.floor(Math.random() * 100)

    if(message.content.toLowerCase().includes("mort")) {
        if(a < b){
            message.channel.send("https://tenor.com/view/one-piece-monkey-d-luffy-straw-hat-luffy-zombie-rise-of-the-dead-gif-17305551")
        }
    }
})