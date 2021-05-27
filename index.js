const Discord = require('discord.js')
const WOKCommands = require('wokcommands')
const config = require("./config.json")
require('dotenv').config()
const fonctions = require("./fonctions.js")
const client = new Discord.Client()




global.tauxHumour = 25
var chèque = 100000
const objTriggers = {
    triggers : ["oui","non","nan","quoi","comment","lol","wesh","hein","ah","cheh","bonjour","bon","yo","salut","wa"],
    réponses : ["stiti","si","si","feur","dent","ita","dene","2","tchoum","vre","au revoir","anniversaire :champagne: :partying_face:","plait","poilu","luigi https://cdn.discordapp.com/attachments/685603812781981730/833623730294226944/668183889583407109.png"]
}
var politesse = ["bonjour","salut","yo","wesh","hey","hola","hello","hellow","ohayo","👋","coucou","pouet","cc","slt","wsh","bjr","pouet","koukou","bonsoir","au revoir"]





client.on('ready', function() {
    console.log(`${client.user.username} est prêt !`)
    client.channels.cache.get('798604848727326780').send(exampleEmbed = new Discord.MessageEmbed().setColor('#CF8523').setTitle(`${client.user.username} est prêt !`).setTimestamp().setThumbnail('https://cdn.discordapp.com/emojis/643895067664187433.png?v=1'))
})
client.on('ready', () => {
    client.user.setPresence({ activity: { name: 'One Piece', type: 'WATCHING' }, status: 'dnd' })
})
client.on('ready', () => {
    const disabledDefaultCommands = [
        'help',
        'command',
        'language',
        'prefix',
        'requiredrole'
      ]
    new WOKCommands(client, {
    commandsDir: 'commands',
    testServers: ['722748727764320317'],
    showWarns: false,
    disabledDefaultCommands
    })
    .setBotOwner(['319929897021865985'])
})




client.on('message', message =>{

    if(message.author.bot) return
    if(fonctions.chanelcours(message)) return


    let res = message.content
    res = res.split("*").join("")
    res = res.split("~").join("")
    res = res.split("_").join("")
    res = res.split("|").join("")
    res = res.split("`").join("")
    res = res.split(".").join("")



    let messageSplit = res.toLowerCase().split(" ");
    let mots = [messageSplit[messageSplit.length - 2],messageSplit[messageSplit.length - 1]] //le dernier et l'avant dernier mot (l'antépénultième tmtc)

    if(fonctions.isLetter(mots[1]) === true && !objTriggers.triggers.includes(mots[1])) {         //vérifie si le dernier mot contient des lettres et s'il n'est pas dans les triggers (return) par ex : si "oui mais" il ne répond pas, mais si "oui ???" il répond
        return
    }

    if(objTriggers.triggers.includes(mots[0]) && objTriggers.triggers.includes(mots[1])) {         //par ex : si ah non, qu'il ne réponde pas si tchoum.
        delete(mots[0])
    }
    
    
    fonctions.funcHumour(message, mots, objTriggers, tauxHumour)

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
    if(fonctions.chanelcours(message)) return

    if(message.content.toLowerCase().includes("mort") && fonctions.proba(100, tauxHumour)) {
        message.channel.send("https://tenor.com/view/one-piece-monkey-d-luffy-straw-hat-luffy-zombie-rise-of-the-dead-gif-17305551")
    }




    if(fonctions.proba(chèque, 1)) {
        message.react('🎟️')
        message.react('🍾')
        message.react('🎫')
        message.react('🥳')
        message.channel.send(
            exampleEmbed = new Discord.MessageEmbed()
            .setColor('#CF8523')
            .setTitle('FÉLICITATIONS : TU AS TOUCHÉ LE CHÈÈÈÈÈÈÈQUE !!!!!!!!! 🥳🥳🥳🥳🥳🥳🥳🥳')
            .setImage('https://static.wikia.nocookie.net/battle-royal-1825-brcu/images/5/5d/Siphano_wiki_br.png/revision/latest/scale-to-width-down/310?cb=20200528132806&path-prefix=fr')
            .setDescription('Cette jeune personne vient actuellement de toucher le chèque. Retrouvez toute son histoire, juste ici : https://www.latlmes.com/entertainment/il-touche-le-chque-dcouvrez-son-histoire-1')
            .setTimestamp()
            .setThumbnail('https://cdn.discordapp.com/emojis/643895067664187433.png?v=1'))
        let url = message.url
        client.channels.cache.get('798604848727326780').send(exampleEmbed = new Discord.MessageEmbed().setColor('#CF8523').setTitle(`LE CHÈQUE : ${url}`))
    }


    politesse.forEach(politesseMot => {
        if(message.content.toLowerCase().startsWith(politesseMot)) {
            message.react('👋')
            console.log('👋')
        }
    })
    
    if (message.content === "👀") {
        message.react('👀')
    }
})



client.on('message', message => {
    if (message.mentions.has(client.user)) {
       message.react('🙃')
   }
});



client.on('message', message => {
    if(message.guild.id !== '776344402636439562') return
    if(message.content === 'https://gfycat.com/narrowcolorfullice') {
    message.delete()
}})


client.on('messageDelete', (message) => {
    if (!message.author || message.author.bot || message.guild.id === '623628341940977674') return
    if (message.mentions.users.size === 0 && message.mentions.roles.size === 0 && !message.mentions.everyone) return
    
    const embed = new Discord.MessageEmbed()
        .setColor('#CF8523')
        .setTitle('GhostPing détecté\n(message supprimé)')
        .setDescription(`Message :\n"${message.content}"`)
        .addFields(
            {name: 'Channel', value: message.channel},
            {name: 'Auteur', value: message.author}
    )
    message.channel.send(embed)
})
client.on('messageUpdate', (oldMessage, newMessage) => {
    if (!oldMessage.author || oldMessage.author.bot || oldMessage.guild.id === '623628341940977674') return

    if (oldMessage.mentions.users.size === 0 && oldMessage.mentions.roles.size === 0 && !oldMessage.mentions.everyone) return

    if(oldMessage.mentions.users.first() !== newMessage.mentions.users.first() || oldMessage.mentions.roles.first() !== newMessage.mentions.roles.first()) {
        const embed = new Discord.MessageEmbed()
            .setColor('#CF8523')
            .setTitle('GhostPing détecté\n(message modifié)')
            .setDescription(`Ancien message :\n"${oldMessage.content}"\nNouveau message :\n"${newMessage.content}"`)
            .addFields(
                {name: 'Channel', value: oldMessage.channel},
                {name: 'Auteur', value: oldMessage.author}
        )
        oldMessage.channel.send(embed)
    }
})

client.login(process.env.token)