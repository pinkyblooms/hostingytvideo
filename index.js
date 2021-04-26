const Discord = require("discord.js");
const bot = new Discord.Client();
const PREFIX = 'test!';

bot.login("ODM2MjQ5ODAwOTAyMTgwOTA1.YIbQUQ.buphAjlt5JLx2Cy_sdzewiGExSA");

bot.on("ready", () => {
  console.log("Test bot for hosting vid on yt");
});

bot.on("message", (message) => {
  if (message.author.bot) return;
  if (message.content.indexOf(PREFIX) !== 0) return;

  const args = message.content.slice(PREFIX.length).trim().split(/ +/g);
  const cmd = args.shift().toLowerCase();

  if (cmd === "ping") {
    message.channel.send(
      `Pong!\n**Took ${Date.now() - message.createdTimestamp}ms**`
    );
  }
});
