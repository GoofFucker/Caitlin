const Discord = require('discord.js');
const client = new Discord.Client();

client.login(process.env.CAITLIN);

client.on("ready", () => {
    console.log("Ready");
    client.user.setActivity(`Un fan de LouMusiqueOfficiel`, { type: "STREAMING", url: "https://www.twitch.tv/neathofficiel" });
