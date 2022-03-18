const Discord = require("discord.js")
const client = new Discord.Client(
    {intents:["GUILDS", "GUILD_MEMBERS", "GUILD_MESSAGES", "GUILD_PRESENCES", "GUILD_MEMBERS"] }
)

client.login(process.env.token)

client.on("ready", () => {
console.log("bot online")
})
client.on("guildMemberAdd", (message) => {
console.log ("nuovo utente")
})
client.on('guildMemberAdd', async (member) => {
    const Embed1 = new Discord.MessageEmbed()
       .setColor('#ff002b')
       .setTitle('Benvenuto in ByZCX 2.0')
       .setDescription('Benvenuto in ByZCX 2.0, per accedere ai canali sei pregato di cliccare sulla reazione in fondo al regolamento per confermare la presa visione')
       .setThumbnail('https://cdn.discordapp.com/attachments/947563942866198549/948322773246279730/ByZCX.jpg');
    await member.send({ embeds: [Embed1] });

})

client.on("messageCreate", (message) => {
    if (message.content == "!/embedStatsOff") {
        var embed2 = new Discord.MessageEmbed()
        .setColor('#ff002b')
        .setTitle('SERVER STATS OFF')
        .setDescription('Le statistiche del server sono momentaneamente offline')
        .setThumbnail('https://cdn.discordapp.com/attachments/947563942866198549/948322773246279730/ByZCX.jpg')
        .addField('tempo stimato', 'dalle 24 alle 72 ore')
        message.channel.send({ embeds: [embed2] })
    }
})

client.on("messageCreate", (message) => {
    if (message.content == "!/prezzi") {
        var embed3 = new Discord.MessageEmbed()
        .setColor('#ff002b')
        .setTitle('PREZZI GRAFICHE')
        .setDescription('nei fields sottostanti troverete i prezzi delle grafiche')
        .setThumbnail('https://cdn.discordapp.com/attachments/947563942866198549/948322773246279730/ByZCX.jpg')
        .addField('\u200b', '\u200b')
        .addFields(
             {
                 name: 'GRAFICHE SINGOLE',
                 value: 'Dai €35.00 in poi (digita !/grafichesingole per sapere di più)',
                 inline: false 
             },
             {
                 name: 'PACCHETTI',
                 value: 'Pacchetto Standard, Pacchetto Medium, Pacchetto Premium, Pacchetto Royale (digita !/pacchetti per sapere di più)',
                 inline: false
             },
             {
                 name: 'ABBONAMENTI',
                 value: 'Settmanali €70.00 + livello, Mensili €320.00 + livello (digita !/abbonamenti per sapere di più)',
                 inline: false
             }
        )
        message.channel.send({ embeds: [embed3] })
    }
})

client.on("messageCreate", (message) => {
    if (message.content == "!/pacchetti") {
        var embed4 = new Discord.MessageEmbed()
        .setColor('#ff002b')
        .setTitle('PREZZI GRAFICHE')
        .setDescription('nei fields sottostanti troverete i prezzi delle grafiche')
        .setThumbnail('https://cdn.discordapp.com/attachments/947563942866198549/948322773246279730/ByZCX.jpg')
        .addField('\u200b', '\u200b')
        .addFields(
             {
                 name: 'LOGO',
                 value: '€50.00',
                 inline: false 
             },
             {
                 name: 'BANNER',
                 value: '€45.00',
                 inline: false
             },
             {
                 name: 'COPERTINE',
                 value: '€35.00',
                 inline: false
             },
             {
                 name: 'STICKER',
                 value: '€15.00 x3',
                 inline: false
             },
             {
                 name: 'SFONDO PC/CELLULARE',
                 value: '€35.00 per cellulare e pc 16:9, €45.00 per pc con risoluzione diversa da quella standard',
                 inline: false
             },
             {
                 name: 'VIDEO CLIP',
                 value: '€55.00 ogni 15 minuti (i prezzi veranno scalati in base alla lunghezza del video clip) + preventivo di €15.00',
                 inline: false
             },
             {
                 name: 'INTRO/OUTRO',
                 value: '€65.00 per x1 intro + x1 outro',
                 inline: false
             }
        )
        message.author.send({ embeds: [embed4] })
    }
})

client.on("messageCreate", (message) => {
    if (message.content == "!/pacchetti") {
        var embed5 = new Discord.MessageEmbed()
        .setColor('#ff002b')
        .setTitle('PREZZI GRAFICHE')
        .setDescription('nei fields sottostanti troverete i prezzi delle grafiche')
        .setThumbnail('https://cdn.discordapp.com/attachments/947563942866198549/948322773246279730/ByZCX.jpg')
        .addField('\u200b', '\u200b')
        .addFields(
             {
                 name: 'STANDARD',
                 value: '€60.00, x1 logo, x1 banner',
                 inline: false 
             },
             {
                 name: 'MEDIUM',
                 value: '€120.00, x1 logo, x1 banner, x1 sfondo',
                 inline: false
             },
             {
                 name: 'PREMIUM',
                 value: '€180.00, x1 logo, x1 banner, x2 sfondi, x1 intro, x1 outro',
                 inline: false
             },
             {
                 name: 'ROYALE',
                 value: '€240.00, x2 loghi, x3 banner, x4 sfondi, x1 intro, x1 outro, 4 copertine a scelta',
                 inline: false
             },
        )
        message.author.send({ embeds: [embed5] })
    }
})

client.on("messageCreate", (message) => {
    if (message.content == "!/abbonamenti") {
        var embed6 = new Discord.MessageEmbed()
        .setColor('#ff002b')
        .setTitle('PREZZI GRAFICHE')
        .setDescription('nei fields sottostanti troverete i prezzi delle grafiche')
        .setThumbnail('https://cdn.discordapp.com/attachments/947563942866198549/948322773246279730/ByZCX.jpg')
        .addField('\u200b', '\u200b')
        .addFields(
             {
                 name: 'SETTIMANALE',
                 value: '€70.00',
                 inline: false 
             },
             {
                 name: 'MENSILE',
                 value: '€320.00',
                 inline: false
             },
        )
        message.author.send({ embeds: [embed6] })
    }
})
//Prima di tutto mandare il messaggio del ticket
client.on("messageCreate", message => {
    if (message.content == "!newticket") {
        var button1 = new Discord.MessageButton()
            .setLabel("Apri ticket")
            .setCustomId("apriTicket")
            .setStyle("PRIMARY")

        var row = new Discord.MessageActionRow()
            .addComponents(button1)

        message.channel.send({ embeds: [embedticket] , components: [row] })
    }
})

client.on("interactionCreate", interaction => {
    if (interaction.customId == "apriTicket") {
        interaction.deferUpdate()
        if (interaction.guild.channels.cache.find(canale => canale.topic == `User ID: ${interaction.user.id}`)) {
            interaction.user.send("Hai gia un ticket aperto").catch(() => { })
            return
        }
        interaction.guild.channels.create(interaction.user.username, {
            type: "text",
            topic: `User ID: ${interaction.user.id}`,
            parent: "idCategoria", //Settare la categoria,
            permissionOverwrites: [
                {
                    id: interaction.guild.id,
                    deny: ["VIEW_CHANNEL"]
                },
                {
                    id: interaction.user.id,
                    allow: ["VIEW_CHANNEL"]
                },
                { //Aggiungere altri "blocchi" se si vogliono dare permessi anche a ruoli o utenti
                    id: "idRuolo",
                    allow: ["VIEW_CHANNEL"]
                }
            ]
        }).then(canale => {
            canale.send("Grazie per aver aperto un ticket")
        })
    }
})

client.on("messageCreate", (message) => {
    var embedticket = new Discord.MessageEmbed()
    .setColor('#ff002b')
    .setTitle('TICKET')
    .setDescription('Clicca sul bottone per aprire un ticket')
    .setThumbnail('https://cdn.discordapp.com/attachments/947563942866198549/948322773246279730/ByZCX.jpg')
    message.channel.send({ embeds: [embedticket] })
})