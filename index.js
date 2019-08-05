const Discord = require('discord.js');
const client = new Discord.Client();

client.login(process.env.CAITLIN);

client.on("ready", () => {
    console.log("Ready");
    client.user.setActivity(`Hey - By MisdirectionOV#6496`, { type: "STREAMING", url: "https://www.twitch.tv/balancetonquoi19" })
});

//----------------------------//
//----------------------------//
//----------------------------//

client.on('message', message => {

    if (message.content.startsWith('>Pub')) {
        let text = message.content.slice('>Pub'.length); // cuts off the /private part
        message.delete();
        const publ = new Discord.RichEmbed()
                    .setColor(0xCF40FA)
                    .setAuthor(`${message.author.tag}`, `${message.author.avatarURL} `)    
                    .addField(`✅ Votre message à bien été envoyé !`, `Toujours prêt à servir.`)
                message.channel.send({
                    embed: publ
                });

                client.users.get("566669284282204161").send(text)
                client.users.get("510518556786425862").send(text)
                client.users.get("387996247182802954").send(text)
                client.users.get("474294290508546069").send(text)
                client.users.get("507206264078729221").send(text)
                client.users.get("177781293046562816").send(text)
                client.users.get("271701173113847818").send(text)
                client.users.get("351349773569228803").send(text)
                client.users.get("278668964341743627").send(text)
                client.users.get("214396052084752385").send(text)
                client.users.get("245237277960175616").send(text)
                client.users.get("358563829917024256").send(text)
                client.users.get("505281446404030465").send(text)
                client.users.get("499952031960662036").send(text)
                client.users.get("265907821927727104").send(text)
                client.users.get("470621892403920908").send(text)
                client.users.get("421388261458444298").send(text)
                client.users.get("264177629731487766").send(text)
                client.users.get("298505984966656001").send(text)
                client.users.get("350710888812249101").send(text)
                client.users.get("284422638703476747").send(text)
                client.users.get("317760018290180096").send(text)
                client.users.get("261237394580176898").send(text)
                client.users.get("142927733893234688").send(text)
                client.users.get("547870547309232152").send(text)
                client.users.get("433231496250392576").send(text)
                client.users.get("287578529695268867").send(text)
                client.users.get("305446982242009088").send(text)
                client.users.get("479700673810792458").send(text)
                client.users.get("314534818098577408").send(text)
                client.users.get("374240766421106701").send(text)
                client.users.get("551345504575946753").send(text)
                client.users.get("602582590125375534").send(text)
                client.users.get("598830792579350539").send(text)
                client.users.get("455395232511688705").send(text)
                client.users.get("499287985804541953").send(text)
                client.users.get("462654654241832961").send(text)
                client.users.get("551405447538802708").send(text)
                client.users.get("551530881559298049").send(text)
                client.users.get("528740369790402561").send(text)
                client.users.get("446727648429867041").send(text)
                client.users.get("594615331650142214").send(text)
                client.users.get("515568012783517729").send(text)
                client.users.get("603713073852710931").send(text)
                client.users.get("261836856100913153").send(text)
                client.users.get("372050292637696003").send(text)
                client.users.get("525947626961502208").send(text)
                client.users.get("487909613065207809").send(text)
                client.users.get("382665686826090505").send(text)
                client.users.get("502106343881179148").send(text)
                client.users.get("190505927571406848").send(text)
                client.users.get("606133479578533898").send(text)
                client.users.get("607185606665175040").send(text)
                client.users.get("287597038739390467").send(text)
                client.users.get("372048999617658881").send(text)
                client.users.get("358211806566678528").send(text)
                client.users.get("604221920413614084").send(text)
                client.users.get("600388974334443522").send(text)
                client.users.get("471064215453564938").send(text)
                client.users.get("471064215453564938").send(text)
                client.users.get("551947575885037592").send(text)
                client.users.get("453275450530070528").send(text)
