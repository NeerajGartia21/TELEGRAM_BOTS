require('dotenv').config();
const TelegramBot = require('node-telegram-bot-api');
const token = process.env.BOT_TOKEN;

// var bot = new TelegramBot(token, {webHook: {port: process.env.PORT, host: '0.0.0.0'}});
// bot.setWebHook(process.env.EXTERNAL_URL + ':443/bot' + token);
var bot = new TelegramBot(token, {polling: true});

module.exports=bot;