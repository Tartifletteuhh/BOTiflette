module.exports = (client) => {
    client.on('message', message => {
        if(message.guild.id !== '776344402636439562') return
            if(message.content === 'https://gfycat.com/narrowcolorfullice') {
                message.delete()
            }
    })
}