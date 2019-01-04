const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ("--")

bot.on('ready', function() {
    bot.user.setGame("Prefix ` --  ` | https://discord.gg/6QfWVSM ");
    console.log("connectedç");
});

bot.login("NTMwMzc5NDY1NjMzNjkzNzA2.Dw-lYQ.pY9pyQ99wNfu0OxWKn38z-Nqi2M");

bot.on('message', message => {
    if (message.content === prefix + "help"){
        message.channel.sendMessage("Liste de commandes: \n --help | --Salut | --create | --embed | --ping | --clear");
        
    }
 
    if (message.content === prefix + "Salut"){
        message.channel.sendMessage("Bonjour tout le monde");
        console.log("commande Hey Vient d'être effectué");
    }

    if (message.content === prefix + "create"){
        message.channel.sendMessage("Ce bot a cree les homme :)");
    }

    if (message.content === prefix + "embed"){
        var embed = new Discord.RichEmbed()
            .setTitle("Embed")
            .setDescription("Message :)")
            .addField(".help", "page d'aide", true)
            .addField("Go rejoinde:)", "Chaine de [Flexigaming](https://www.youtube.com/channel/UCqYbjFVLK64KsStYNYZTlWA)", true)
            .setColor("0xFF8000")
            .setFooter("Bon moment avec Flexibot ! :)")
        message.channel.sendEmbed(embed);
    }
    if (message.content === prefix + "ping"){
        message.channel.sendMessage("Ping serveur : `"+`${message.createdTimestamp - Date.now()} ` + 'ms`');
    }
    
    if (message.content === prefix + "clear"){
        if (message.member.hasPermission("CLEAR_MESSAGE")){
            message.channel.fetchMessages()
                .then(function(list){
                    message.channel.bulkDelete(list);
                }, function(err){message.channel.send("Erreur Commande")})}
    }
    
    

});
