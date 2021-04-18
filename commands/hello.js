module.exports = {
  slash: 'both',
  description: "hello world !",
    callback: ({message}) => {
      console.log("world !")

      if (message) {
        message.channel.send('world !')
      }
    
      return 'world !'
    }
  }