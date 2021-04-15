const Discord = require('discord.js')
const pronote = require('pronote-api')
const client = new Discord.Client()
client.login('NzM1NDc3MDUwNTc5NjE1NzU0.Xxg0YQ.haiX_5QZUKlnRTC-tRox5qRZGyM')
const PREFIX = "!"


var tauxHumour = 25
var chèque = 1000000
const objTriggers = {
    triggers : ["oui","non","nan","quoi","comment","lol","wesh","hein","ah","cheh","bonjour","bon","yo"],
    réponses : ["stiti","si","cy","feur","dent","ita","dene","2","tchoum","vre","au revoir","anniversaire :champagne: :partying_face:","plait"]
}
var politesse = ["bonjour","salut","yo","wesh","hey","hola","hello","hellow","ohayo","👋"]

function chanelcours(message) {
    if(message.channel.parent) {
        if (message.channel.parent.id === "776345454367473676") return true
    }
}

function proba(plafond, tauxHumour) {return Math.floor(Math.random() * plafond) <= tauxHumour}


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



client.on('message', message => {
    if(message.content === '!hello') {
    message.channel.send('world !')
    console.log("world !")
    }
})




client.on('message', message => {

    if(message.author.bot) return
    let messageSplit = message.content.toLowerCase().split(" ");

    if(messageSplit[0].toLowerCase() === "!sethumour") {
        if (message.author.id !== '319929897021865985') {
            message.channel.send(
                exampleEmbed = new Discord.MessageEmbed()
                .setColor('#FFC0CB')
                .setTitle('Seul mon créateur peut modifier mon humour, désolé !'))
            console.log(`pas les perms humour`)
            return
        }
        tauxHumour = messageSplit[1]
        message.channel.send(
            exampleEmbed = new Discord.MessageEmbed()
            .setColor('#FFC0CB')
            .setTitle(`Nouvelle valeur : ${tauxHumour}`))
        console.log(`Nouvelle valeur : ${tauxHumour}`)
    }

    if(messageSplit[0].toLowerCase() === "!varhumour") {
        message.channel.send(
            exampleEmbed = new Discord.MessageEmbed()
            .setColor('#FFC0CB')
            .setTitle(`Mon humour est de valeur : ${tauxHumour}`))
        console.log(`Mon humour est de valeur : ${tauxHumour}`)
    }

})



client.on('message', message => {

    if(message.author.bot) return
    let messageSplit = message.content.toLowerCase().split(" ");

    if(messageSplit[0].toLowerCase() === "!invitme") {
        message.delete()
        message.channel.send(
            exampleEmbed = new Discord.MessageEmbed()
            .setColor('#FFC0CB')
            .setTitle("Mon lien d'invitation : https://discord.com/api/oauth2/authorize?client_id=735477050579615754&permissions=8&scope=applications.commands%20bot"))
        console.log(`lien d'invit`)
    }

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

    if(proba(chèque, 1)) {
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