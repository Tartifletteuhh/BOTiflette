module.exports = (client) => {
    client.on('message', message => {
        if (message.mentions.has(client.user)) {
        message.react('🙃')
        }
    })
}