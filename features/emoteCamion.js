module.exports = (client) => {
    client.on('message', message =>{
        if(message.channel.id === "623628342528049153" || message.guild.id !== "623628341940977674") {
            return
        }
        const emoteCamion = message.guild.emojis.cache.find(emoji => emoji.name === 'Camion')
        message.react(emoteCamion)
    })
}