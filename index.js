const {Client, MessageAttachment} = require('discord.js');
const bot = new Client();
const Canvas = require('canvas');

const token = 'NzE5MTUyOTY5Njk3ODUzNTUw.XuBD1A.9yoe_aFqWYVKRQT8ExsSyyO7LsI';

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

bot.on('message', async msg =>{

    const args = msg.content.slice(PREFIX.length).split(' ');
    const command = args.shift().toLowerCase();

    if (command === 'wow') {
    	const taggedUser = msg.mentions.users.first();

        const canvas = Canvas.createCanvas(1024,576);
        const ctx = canvas.getContext('2d');

        const bg = await Canvas.loadImage('./wallpaper.jpg');
        ctx.drawImage(bg, 0, 0, canvas.width, canvas.height);

        // Pick up the pen
	    ctx.beginPath();
	    // Start the arc to form a circle
	    ctx.arc(300, 165, 130, 0, Math.PI * 2, true);
	    // Put the pen down
	    ctx.closePath();
	    // Clip off the region you drew on
	    ctx.clip();

        const avatar = await Canvas.loadImage(taggedUser.displayAvatarURL({ format: 'jpg' }));
        ctx.drawImage(avatar, 170, 35, 260, 260);

        const attachment = new MessageAttachment(canvas.toBuffer(), 'autism.png')

        msg.channel.send(attachment);
}
})

bot.login(token);