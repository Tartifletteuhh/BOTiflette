module.exports.chanelcours = (message) => {
    if(message.channel.parent) {
        if (message.channel.parent.id === "776345454367473676") return true
    }
}

module.exports.proba = (plafond, valeur) => {return Math.floor(Math.random() * plafond) <= valeur}
proba = (plafond, valeur) => {return Math.floor(Math.random() * plafond) <= valeur}

module.exports.funcHumour = (message, mots, objTriggers, tauxHumour) => {

    mots.forEach(mot => {
        if(objTriggers.triggers.includes(mot) && proba(100, tauxHumour)) {
            message.channel.send(objTriggers.réponses[objTriggers.triggers.indexOf(mot)])
            console.log(objTriggers.réponses[objTriggers.triggers.indexOf(mot)])
        }
    })

}

module.exports.isLetter = (x) => {
    return x.toLowerCase() != x.toUpperCase();
}

