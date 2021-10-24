const fonctions = require("../fonctions.js")
var chèque = 100000
module.exports = (client) => {
    client.on('message', message =>{
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
    })
}