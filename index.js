const Discord = require('discord.js')
const WOKCommands = require('wokcommands')
require('dotenv').config()
const client = new Discord.Client()

client.on('ready', () => {
    console.log(`${client.user.username} est prêt !`)
    client.channels.cache.get('798604848727326780').send(exampleEmbed = new Discord.MessageEmbed().setColor('#CF8523').setTitle(`${client.user.username} est prêt !`).setTimestamp().setThumbnail('https://cdn.discordapp.com/emojis/643895067664187433.png?v=1'))
    client.user.setPresence({ activity: { name: 'One Piece', type: 'WATCHING' }, status: 'dnd' })
    const disabledDefaultCommands = [
        'help',
        'command',
        'language',
        'prefix',
        'requiredrole'
      ]
    new WOKCommands(client, {
        commandsDir: 'commands',
        featuresDir: 'features',
        testServers: ['722748727764320317'],
        showWarns: false,
        disabledDefaultCommands
    })
    .setBotOwner(['319929897021865985'])
})

client.login(process.env.token)