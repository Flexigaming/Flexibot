const Discord = require('discord.js');
const bot = new Discord.Client();
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync');

const adapter = new FileSync('database.json');
const db = low(adapter);

db.defaults({histoire: [], xp: []}).write()

var prefix = ("**")

bot.on('ready', function() {
    bot.user.setGame("Create by Flex :) Command: **help");
    console.log("connectedç");
});


bot.login("NTMwMzc5NDY1NjMzNjkzNzA2.Dw-lYQ.pY9pyQ99wNfu0OxWKn38z-Nqi2M");

bot.on('message', message => {

    var msgauthor = message.author.id;

    if(message.author.bot)return;

    if(!db.get("xp").find({user: msgauthor}).value()){
        db.get("xp").push({user: msgauthor, xp: 1}).write();
    }else{
        var userxpdb = db.get("xp").filter({user: msgauthor}).find('xp').value();
        console.log(userxpdb);
        var userxp = object.values(userxpdb)
        console.log(userxp)
        console.log(`Nombre d'exp: ${userxp[1]}`)

        db.get("xp").find({user: msgauthor}).assign({user: msgauthor, xp: userxp[1]+= 1}).write();
    
    if (message.content === prefix + "exp"){
        var xp = db.get("xp").filter({user: msgauthor}).find('xp').value()
        var xpfinal = object.values(xp);
        var xp_embed = new Discord.RichEmbed()
            .setTitle(`stat des EXP de ${message.author.username}`)
            .setColor('#F4D03F')
            .setDescription("Affichage EXP")
            .addField("XP:", `${xpfinal[1]} xp`)
            .setFooter(":)")
        message.channel.send({Embed: xp_embed});
    }}})


    if (message.content === prefix + "help"){
        message.channel.sendMessage("Liste de commandes: \n -**help");
    }

    if (message.content === prefix + "create"){
        message.reply("Ce bot a été crée par _Flexigaming :) ")
        console.log("Commande effectué ")
    }


    
;
