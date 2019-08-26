const Discord = require('discord.js');
const client = new Discord.Client();

client.login(process.env.CAITLIN);

client.on("ready", () => {
    console.log("Ready");
    client.user.setActivity(`Le meilleur bot pour Pub !`, { type: "STREAMING", url: "https://www.twitch.tv/balancetonquoi19" })
});

client.on('message', message => {

    if (message.content.startsWith('>Pub')) {
        let text = message.content.slice('>Pub'.length); // cuts off the /private part
        message.delete();
        //if(message.channel.id === "608036987571535893") {
        const publ = new Discord.RichEmbed()
                    .setColor(0xCF40FA)
                    .setAuthor(`${message.author.tag}`, `${message.author.avatarURL} `)    
                    .addField(`✅ Votre message à bien été envoyé !`, `Toujours prêt à servir.`)
                message.channel.send({
                    embed: publ
                });

                message.guild.members.forEach(member => { member.send(text);
    });
}});
