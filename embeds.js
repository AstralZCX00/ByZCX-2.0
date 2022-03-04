client.on("messageCreate", (message) => {
        var embedticket = new Discord.MessageEmbed()
        .setColor('#ff002b')
        .setTitle('APRI UN TICKET')
        .setDescription('clicca sul bottone in basso per aprire un ticket e parlare direttamente con lo Staff')
        .setThumbnail('https://cdn.discordapp.com/attachments/947563942866198549/948322773246279730/ByZCX.jpg')
        message.channel.send({ embeds: [embed2] })
    }
)