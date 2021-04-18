module.exports = {
    slash: 'both',
    description: "ping pong !",
    callback: ({message}) => {
        console.log('pong !')

        if (message) {
            message.channel.send('pong !')
        }
        
        return 'pong !'
    }
  }