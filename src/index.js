const Discord = require("discord.js");
const client = new Discord.Client();

const data_ui = "ODI2MzM2NjY0MTM2OTc0Mzc4.YGK__Q.6OaPO26kflOMvbZTHljs_EK2c5o";

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message", (msg) => {
  if (msg.content === "ping") {
    msg.reply("Pong!");
  }
});

client.login(data_ui);
