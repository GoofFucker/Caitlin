const Discord = require('discord.js');
const client = new Discord.Client();

client.login(process.env.CAITLIN);

client.on("ready", () => {
    console.log("Ready");
    client.user.setActivity(`Le meilleur bot pour Pub !`, { type: "STREAMING", url: "https://www.twitch.tv/balancetonquoi19" })
});

client.on('guildMemberAdd', member => {
    member.send("Hey mec, n'hésite pas à aller faire un tour sur ma nouvelle vidéo : https://www.youtube.com/watch?v=CGyQ_2l3Chs");
                });

client.on('guildMemberRemove', member => {
    member.send("Hey mec, n'hésite pas à aller faire un tour sur ma nouvelle vidéo : https://www.youtube.com/watch?v=CGyQ_2l3Chs");
                });
