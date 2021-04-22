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

      if (member.user.bot === true) {
          bot = "Oui";
      } else {
          bot = "Non";
      }
      let embed = new MessageEmbed()
              .setColor('#FFC0CB')
              .setAuthor(member.user.username)
              .setThumbnail(target.avatarURL())
              .addField("Pseudo complet", `${member.user.tag}`, inline)
              .addField("ID", member.user.id, inline)
              .addField("Surnom", `${member.nickname !== null ? `Surnom: ${member.nickname}` : "Aucun"}`, true)
              .addField("Bot", `${bot}`,inline, true)
              .addField("Statuts", `${status[member.user.presence.status]}`, inline, true)
              .addField("Joue à", `${member.user.presence.game ? `🎮 ${member.user.presence.game.name}` : "Ne joue pas."}`,inline, true)
              .addField("À rejoint discord le", member.user.createdAt)
              .setFooter(`Informations sur ${member.user.username}`)
              .setTimestamp()
      
      message.channel.send(embed);
    }
  }
  