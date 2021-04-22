module.exports = {
    callback: ({message}) => {
        console.log('pong !')

        if (message) {
            message.channel.send("Pinging ...")
            .then((msg) => {
                msg.edit("Ping: " + (Date.now() - msg.createdTimestamp) + "ms")
            });
        }
    }
  }