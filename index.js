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
client.on('guildMemberAdd', (member) => {
    var canale = client.channel.cache.get("948660777177460817")
    canale.setName(`👾│members: ${canale.guild.memberCount}`)
})
