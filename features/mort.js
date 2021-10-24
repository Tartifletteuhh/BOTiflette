const fonctions = require("../fonctions.js")
module.exports = (client) => {
    client.on('message', message =>{
        if (message.author.bot) return
        
        if(fonctions.chanelcours(message)) return

        if(message.content.toLowerCase().includes("mort") && fonctions.proba(100, tauxHumour)) {
            message.channel.send("https://tenor.com/view/one-piece-monkey-d-luffy-straw-hat-luffy-zombie-rise-of-the-dead-gif-17305551")
        }
    })
}