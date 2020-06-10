const {Client, MessageAttachment} = require('discord.js');
const bot = new Client();

const token = 'NzE5MTUyOTY5Njk3ODUzNTUw.XuAkhQ.Uogs9LGdS1IQYN5J3dsC4QTl7h4';

const PREFIX = ',';

bot.on('ready', () =>{
    console.log('This bot is online!');  
})

bot.on('message', msg =>{
   
    let args = msg.content.substring(PREFIX.length).split(" ");
    if (!msg.content.startsWith(PREFIX)) return;

    switch(args[0]){
        case 'ping':
            msg.channel.send('pong!');
            break;
        case 'wtf jovey':
            const attachment = new MessageAttachment('https://cdn.discordapp.com/attachments/347327561707290624/701151276725174342/1570919765620.jpg')
            msg.channel.send(attachment);
            break;
    }
})

bot.on('message', msg =>{
    switch(msg.content){
        case 'wtf jovey':
            const attachment = new MessageAttachment('https://cdn.discordapp.com/attachments/347327561707290624/701151276725174342/1570919765620.jpg')
            msg.channel.send(attachment);
            break;
    }
})

bot.login(token);