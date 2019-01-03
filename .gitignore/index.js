const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ("**")

bot.on('ready', function() {
    bot.user.setGame("Create by Flex :) Command: **help");
    console.log("connectedç");
});

bot.login("NTMwMzc5NDY1NjMzNjkzNzA2.Dw-lYQ.pY9pyQ99wNfu0OxWKn38z-Nqi2M");

bot.on('message', message => {
    if (message.content === prefix + "help"){
        message.channel.sendMessage("Liste de commandes: \n -**help");
    }
 
    if (message.content === prefix + "Salut"){
        message.reply("Bonjour tout le monde");
        console.log("commande Hey Vient d'être effectué");
    }

    if (message.content === prefix + "create"){
        message.reply("Ce bot a été crée par _Flexigaming :) ")
    }

    if (message.content === prefix + "embed"){
        var embed = new Discord.RichEmbed()
            .setTitle("EMBED")
            .setDescription("Ceci est un Embed")
            .addField(".help", "Page d'aide", true)
            .addField("Embed01","chaine de [Flexigaming](https://www.youtube.com/channel/UCqYbjFVLK64KsStYNYZTlWA)", true)
            .setColor("0x58FAF4")       
            .setFooter("Abbonez vous :)")    
        Message.channel.sendEmbed(embed); 
    }

});
