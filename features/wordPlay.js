const objTriggers = {
    triggers : ["oui","non","nan","quoi","comment","lol","wesh","hein","ah","cheh","bonjour","bon","yo","salut","wa"],
    réponses : ["stiti","si","si","feur","dent","ita","dene","2","tchoum","vre","au revoir","anniversaire :champagne: :partying_face:","plait","poilu","luigi https://cdn.discordapp.com/attachments/685603812781981730/833623730294226944/668183889583407109.png"]
}
const fonctions = require("../fonctions.js")
global.tauxHumour = 25
module.exports = (client) => {
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
}