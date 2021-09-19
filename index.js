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







client.on('message', async message => {
    if (message.author.id == 319929897021865985 || message.author.id == 418779371168464896) {
        try{
            const args = message.content.trim().split(/ +/g)
            const command = args.shift().toLowerCase()
        
            if (command == 'go' && message.mentions.members){
                
                if(message.mentions.members.first().id == 735477050579615754) {


                    // find the role with the name "Community"
                    let role = message.mentions.roles.first()
                    //let role2 = message.guild.roles.find(r => r.name == 'TEST')
        
                    // if role doesn't exist, notify the author of command that the role couldn't be found
                    if (!role) return message.channel.send(`**${message.author.username}**, role not found`)
        
                    // find all guild members that aren't bots, and add the "Community" role to each
                    message.guild.members.fetch().then((members) => {
                        members.forEach(member => member.roles.add(role))
                        message.channel.send(`**${message.author.username}**, role **${role.name}** was added to all members`
                        ) 
                        
                    })
        
                    // notify the author of the command that the role was successfully added to all members
                }
            
            }
        } catch (err) {
            console.error(err)
            message.channel.send('Il y a eu un problème.')
        }
    }
    
    
})






client.login(process.env.token)