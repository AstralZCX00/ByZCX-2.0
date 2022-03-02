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
       .setThumbnail('https://cdn.discordapp.com/attachments/947563942866198549/948322773246279730/ByZCX.jpg%27');
    await member.send({ embeds: [Embed1] });

})

client.on('guildMemberAdd', (member) => {
    client.channels.cache.get('948660777177460817').setName(`All User: - ${member.guild.memberCount}`)
    client.channels.cache.get('948660919175630898').setName(`Members: - ${member.guild.members.cache.filter(member => !member.user.bot).size}`)
    client.channels.cache.get('948661031809450076').setName(`Bots: - ${member.guild.members.cache.filter(member => !member.user.bot).size}`)
})
client.on('guildMemberRemove', (member) => {
    client.channels.cache.get('948660777177460817').setName(`All User: - ${member.guild.memberCount}`)
    client.channels.cache.get('948660919175630898').setName(`Members: - ${member.guild.members.cache.filter(member => !member.user.bot).size}`)
    client.channels.cache.get('948661031809450076').setName(`Bots: - ${member.guild.members.cache.filter(member => !member.user.bot).size}`)
})