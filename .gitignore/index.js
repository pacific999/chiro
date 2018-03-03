const Discord = require("discord.js");

var bot = new Discord.client();

bot.on("ready", function() {
    bot.user.setGame("Prototype, !help");
    console.log("Le bot a bien ete connecte");
}};

bot.login("NDE4ODY1OTM1Njk3NDQ0ODY1.DXn8fA.OHeJB0FW9TDj_gP5ygG1JfVNdoc");
