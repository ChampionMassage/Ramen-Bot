const Discord = require("discord.js");
const {RichEmbed} = require('discord.js');
const fs = require("fs");
let commandList = fs.readFileSync('./Help.txt', 'utf-8');
module.exports.run = async (PB, message, args) => {
    let embedMessages = message.channel.permissionsFor(message.guild.me).has("EMBED_LINKS");
    if(!embedMessages) return message.channel.send("I do not have permission EMBED_LINKS");
    const embed = new RichEmbed()
    .setColor(0x00AE86)
    .setAuthor("")
    .setDescription(commandList)
    .setFooter("Command Executed")
    message.channel.send({embed: embed});
}

module.exports.help = {
    name:"help"
}