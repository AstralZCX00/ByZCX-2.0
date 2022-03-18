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
        var embedticket = new Discord.MessageEmbed()
        .setColor('#ff002b')
        .setTitle('APRI UN TICKET')
        .setDescription('clicca sul bottone in basso per aprire un ticket e parlare direttamente con lo Staff')
        .setThumbnail('https://cdn.discordapp.com/attachments/947563942866198549/948322773246279730/ByZCX.jpg')
        message.channel.send({ embeds: [embed2] })
    }
)

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
                 value: 'Pacchetto Standard, Pacchetto Medium, Pacchetto Premium, Pacchetto Royal (digita !/pacchetti per sapere di più)',
                 inline: false
             },
             {
                 name: 'ABBONAMENTI',
                 value: 'Settmanali €70.00 + livello, Mensili €320.00 + livello',
                 inline: false
             }
        )
        message.channel.send({ embeds: [embed3] })
    }
})