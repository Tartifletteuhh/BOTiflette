const Discord = require('discord.js')
const WOKCommands = require('wokcommands')
require('dotenv').config()
const client = new Discord.Client()

global.tauxHumour = 25
var chèque = 1000000
const objTriggers = {
    triggers : ["oui","non","nan","quoi","comment","lol","wesh","hein","ah","cheh","bonjour","bon","yo"],
    réponses : ["stiti","si","cy","feur","dent","ita","dene","2","tchoum","vre","au revoir","anniversaire :champagne: :partying_face:","plait"]
}
var politesse = ["bonjour","salut","yo","wesh","hey","hola","hello","hellow","ohayo","👋","coucou"]

function chanelcours(message) {
    if(message.channel.parent) {
        if (message.channel.parent.id === "776345454367473676") return true
    }
}

function proba(plafond, valeur) {return Math.floor(Math.random() * plafond) <= valeur}


function funcHumour(message, mots, objTriggers, tauxHumour) {

    mots.forEach(mot => {
        if(objTriggers.triggers.includes(mot) && proba(100, tauxHumour)) {
            message.channel.send(objTriggers.réponses[objTriggers.triggers.indexOf(mot)])
            console.log(objTriggers.réponses[objTriggers.triggers.indexOf(mot)])
        }
    })

}

function isLetter(x) {
    return x.toLowerCase() != x.toUpperCase();
}


client.on('ready', function() {
    console.log("prêt !")
    client.channels.cache.get('798604848727326780').send(exampleEmbed = new Discord.MessageEmbed().setColor('#FFC0CB').setTitle('prêt !'))
})
client.on('ready', () => {
    client.user.setPresence({ activity: { name: 'One Piece', type: 'WATCHING' }, status: 'dnd' })
})
client.on('ready', () => {
    new WOKCommands(client, {
    commandsDir: 'commands',
    testServers: ['722748727764320317'],
    showWarns: false,
    })
})


client.on('message', message =>{

    if(message.author.bot) return
    if(chanelcours(message)) return


    let res = message.content
    res = res.split("*").join("")
    res = res.split("~").join("")
    res = res.split("_").join("")
    res = res.split("|").join("")
    res = res.split("`").join("")
    res = res.split(".").join("")



    let messageSplit = res.toLowerCase().split(" ");
    let mots = [messageSplit[messageSplit.length - 2],messageSplit[messageSplit.length - 1]] //le dernier et l'avant dernier mot (l'antépénultième tmtc)

    if(isLetter(mots[1]) === true && !objTriggers.triggers.includes(mots[1])) {         //vérifie si le dernier mot contient des lettres et s'il n'est pas dans les triggers (return) par ex : si "oui mais" il ne répond pas, mais si "oui ???" il répond
        return
    }

    if(objTriggers.triggers.includes(mots[0]) && objTriggers.triggers.includes(mots[1])) {         //par ex : si ah non, qu'il ne réponde pas si tchoum.
        delete(mots[0])
    }
    
    
    funcHumour(message, mots, objTriggers, tauxHumour)

})



client.on('message', message =>{                        //emote camion sur la noblesse sauf sur le général
    if(message.channel.id === "623628342528049153" || message.guild.id !== "623628341940977674") {
        return
    }
    const emoteCamion = message.guild.emojis.cache.find(emoji => emoji.name === 'Camion')
    message.react(emoteCamion)
})


client.on('message', message =>{

    if(message.author.bot) return
    if(chanelcours(message)) return

    if(message.content.toLowerCase().includes("mort") && proba(100, tauxHumour)) {
        message.channel.send("https://tenor.com/view/one-piece-monkey-d-luffy-straw-hat-luffy-zombie-rise-of-the-dead-gif-17305551")
    }

    if(proba(chèque, 5)) {
        message.react('🎟️')
        message.react('🍾')
        message.react('🎫')
        message.react('🥳')
        message.channel.send(
            exampleEmbed = new Discord.MessageEmbed()
            .setColor('#FFC0CB')
            .setTitle('FÉLICITATIONS : TU AS TOUCHÉ LE CHÈÈÈÈÈÈÈQUE !!!!!!!!! 🥳🥳🥳🥳🥳🥳🥳🥳')
            .setImage('https://static.wikia.nocookie.net/battle-royal-1825-brcu/images/5/5d/Siphano_wiki_br.png/revision/latest/scale-to-width-down/310?cb=20200528132806&path-prefix=fr')
            .setDescription('Cette jeune personne vient actuellement de toucher le chèque. Retrouvez toute son histoire, juste ici : https://www.latlmes.com/entertainment/il-touche-le-chque-dcouvrez-son-histoire-1'))
        let url = message.url
        client.channels.cache.get('798604848727326780').send(exampleEmbed = new Discord.MessageEmbed().setColor('#FFC0CB').setTitle(`LE CHÈQUE : ${url}`))
    }

    politesse.forEach(politesseMot => {
        if(message.content.toLowerCase().startsWith(politesseMot)) {
            message.react('👋')
            console.log('👋')
        }
    })
})


/*client.on("message", message => { // EventEmitter
	if(message.content == "!ping"){ // Check if message is "!ping"
			message.channel.send("Pinging ...") // Placeholder for pinging ... 
			.then((msg) => { // Resolve promise
				msg.edit("Ping: " + (Date.now() - msg.createdTimestamp) + "ms") // Edits message with current timestamp minus timestamp of message
			});
		}
})*/



client.login('NzM1NDc3MDUwNTc5NjE1NzU0.Xxg0YQ.haiX_5QZUKlnRTC-tRox5qRZGyM')