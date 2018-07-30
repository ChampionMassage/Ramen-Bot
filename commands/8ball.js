const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

//!8ball <question  fjdksf>
if (!args[2]) return message.reply("Please ask a full question!");
let replies = ["Yes","No","I don't know", "I don't think so","Maybe", "Most Likely","There is a good chance","Never!","Quite Likley","The future is uncertain","Possibly","Hell no", ];

let result = Math.floor((Math.random()* replies.length));
let question = args.slice(0).join("");

let ballembed = new Discord.RichEmbed()
.setAuthor(message.author.tag)
.setColor("#FF9900")
.addField("Answer", replies[result]);

message.channel.send(ballembed);
}

module.exports.help = {
  name: "8ball"
}
