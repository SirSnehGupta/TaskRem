const {Bot} = require('grammy');
const bot = new Bot("2051506304:AAHVW3FrNxyFPccwvu5rJDquMXG-UpNmc9Y");
bot.command("start", (ctx) => ctx.reply("Welcome to TaskRem!"));
bot.on('message',(ctx) => {ctx.reply(ctx.message.text); console.log(ctx.message.text);});
bot.start();
