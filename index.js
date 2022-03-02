const Discord = require("discord.js")
const client = new Discord.Client(
    {intents:["GUILDS", "GUILD_MEMBERS", "GUILD_MESSAGES"] }
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

client.on("guildMemberAdd", member => {
    var canale = client.channels.cache.get("948505027717259305")
    canale.setName("members: " + member.guild.memberCount)
});
client.on("guildMemberRemove", member => {
    var canale = client.channels.cache.get("948505027717259305")
    canale.setName("members: " + member.guild.memberCount)
});