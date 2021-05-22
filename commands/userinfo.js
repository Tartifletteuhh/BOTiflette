const { MessageEmbed } = require('discord.js')

module.exports = {
    callback: ({message}) => {
      console.log("infouser")

      let inline = true
      const status = {
        online: "Online",
        idle: "Inactif",
        dnd: "Ne Pas Déranger",
        offline: "Hors ligne/Invisible"
      }
      const member = message.mentions.members.first() || message.member
      let target = message.mentions.users.first() || message.author
      let activity = member.user.presence.activities[member.user.presence.activities.length - 1]

      if (member.user.bot === true) {
          bot = "Oui";
      } else {
          bot = "Non";
      }
      console.log(activity)
      if (activity) {
        if (activity.name === "Custom Status") {
          activityName = "Rien"
        } else {
          activityName =  "🎮 " + activity.name
        }
      } else {
        activityName = "Rien"
      }
      
      let embed = new MessageEmbed()
              .setColor('#CF8523')
              .setAuthor(member.user.username)
              .setThumbnail(target.avatarURL())
              .addField("Pseudo complet", `${member.user.tag}`, inline)
              .addField("ID", member.user.id, inline)
              .addField("Surnom", `${member.nickname !== null ? `${member.nickname}` : "Aucun"}`, true)
              .addField("Bot", `${bot}`,inline, true)
              .addField("Statut", `${status[member.user.presence.status]}`, inline, true)
              .addField("Joue à", `${activityName}`,inline, true)
              .addField("À rejoint discord le", member.user.createdAt)
              .setFooter(`Informations sur ${member.user.username}`)
              .setTimestamp()
      
      message.channel.send(embed);
    }
  }
  