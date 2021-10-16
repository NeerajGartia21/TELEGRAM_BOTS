var bot=require('../config/bot')
module.exports.startBot=(msg)=>{
    bot.sendMessage(msg.chat.id, 'Please send the url of amazon in the format of the `/bookmark <url>`');
}