module.exports = (client) => {
    client.on('message', message =>{
        if (message.content === "👀") {
            message.react('👀')
        }
    })
}