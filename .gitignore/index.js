const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ("**")

bot.on('ready', function() {
    bot.user.setGame("Create by Flex :) Command: **help");
    console.log("connectedç");
});

bot.login(process.env.TOKEN);

bot.on('message', message => {
    if (message.content === prefix + "help"){
        message.channel.sendMessage("Liste de commandes: \n -**help");
    }

    if (message.content === prefix + "Salut"){
        message.reply("Bonjour tout le monde");
        console.log("commande Hey Vient d'être effectué");
    }
});
