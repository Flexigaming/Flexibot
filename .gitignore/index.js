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
        message.channel.sendMessage("`Liste de commandes`: \n ``` --help | --salut | --info | --embed | --ping | --clear | --bvn | By Flexigaming ```");
        
    }

    if (message.content === prefix + "info"){
        var embed = new Discord.RichEmbed()
            .setTitle("Actualités du jour")
            .addField("Voeux de Monsieurs Macron : [Video](https://www.rtl.fr/actu/politique/les-actualites-de-18h-une-majorite-de-francais-pas-convaincue-par-les-voeux-de-macron-7796099416)", true)
            .addField("Actualités Mondiale", "concurrente de Trump ? : [Video](https://www.ladepeche.fr/article/2019/01/04/2934871-etats-unis-trump-a-l-epreuve-d-une-chambre-democrate.html)", true)
            .addField("Vous pouvez:)", "Rejoinde mes partenaire Ici [AcenaZ](https://discord.gg/6QfWVSM)", true)
            .setColor("FF8000")
            .setFooter("Bon moment avec Flexibot ! :)")
        message.channel.sendEmbed(embed);
    }
    
 
    if (message.content === prefix + "salut"){
        message.channel.sendMessage("Bonjour tout le monde");
        console.log("commande Hey Vient d'être effectué");
    }


    if (message.content === prefix + "embed"){
        var embed = new Discord.RichEmbed()
            .setTitle("Méssage intégrer :)")
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
    
    if (message.content === prefix + "bvn"){
        message.channel.sendMessage("`Bienvenue` :) Amuse toi bien sur notre Serveur `discord` ! ");
    
    }
    

});
