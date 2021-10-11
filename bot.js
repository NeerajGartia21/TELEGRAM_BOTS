require('dotenv').config();
const TelegramBot = require('node-telegram-bot-api');
var client = require('flipkart-api-affiliate-client');
const token = process.env.TOKEN;
const pricefinder = require('pricefinder-ecommerce');


// Created instance of TelegramBot
const bot = new TelegramBot(token, {
    polling: true,
    PORT:process.env.port||80
});


var fkClient = new client({
    trackingId:"<YOUR TRACKING ID>",
    token:"<YOUR TOKEN>",
},"<FORMAT>");

const urls=[];

// Listener (handler) for telegram's /bookmark event
bot.onText(/\/bookmark/, async (msg, match) => {
    const chatId = msg.chat.id;
    const url = match.input.split(' ')[1];

    if (url === undefined) {
        bot.sendMessage(
            chatId,
            'Please provide URL of article!',
        );
        return;
    }
     const product = await pricefinder(url, "amazon");
     if(product.available){
        bot.sendMessage(
            chatId,
            `Item is available and price is ${product.price}`,
        );
    }else{
        bot.sendMessage(
            chatId,
            `Item is not available.We will notify when it will come to stock`
        );
        urls.push({
            user:chatId,
            url:url
        })
    }
});

function checkAvailability() {
    
    urls.forEach(async (url)=>{
        const product = await pricefinder(url.url, "amazon");
        if(product.available){
            await  bot.sendMessage(
                url.user,
                `Item is available and price is ${product.price}`,
            );
            urls = array.filter(function(value, index, arr){ 
                return value!=url;
            });
            console.log(urls)
        }
    })
}

setInterval(checkAvailability, 5000); 



// // Listener (handler) for telegram's /label event
// bot.onText(/\/label/, (msg, match) => {
//     const chatId = msg.chat.id;
//     const url = match.input.split(' ')[1];

//     if (url === undefined) {
//         bot.sendMessage(
//             chatId,
//             'Please provide URL of article!',
//         );
//         return;
//     }

//     tempSiteURL = url;
//     bot.sendMessage(
//         chatId,
//         'URL has been successfully saved!',
//         {
//             reply_markup: {
//                 inline_keyboard: [[
//                     {
//                         text: 'Development',
//                         callback_data: 'development'
//                     }, {
//                         text: 'Lifestyle',
//                         callback_data: 'lifestyle'
//                     }, {
//                         text: 'Other',
//                         callback_data: 'other'
//                     }
//                 ]]
//             }
//         }
//     );
// });

// // Listener (handler) for callback data from /label command
// bot.on('callback_query', (callbackQuery) => {
//     const message = callbackQuery.message;
//     const category = callbackQuery.data;

//     URLLabels.push({
//         url: tempSiteURL,
//         label: category,
//     });

//     tempSiteURL = '';

//     bot.sendMessage(message.chat.id, `URL has been labeled with category "${category}"`);
// });

// // Listener (handler) for showcasing different keyboard layout
// bot.onText(/\/keyboard/, (msg) => {
//     bot.sendMessage(msg.chat.id, 'Alternative keybaord layout', {
//         'reply_markup': {
//             'keyboard': [['Sample text', 'Second sample'], ['Keyboard'], ['I\'m robot']],
//             resize_keyboard: true,
//             one_time_keyboard: true,
//             force_reply: true,
//         }
//     });
// });

// // Inline keyboard options
// const inlineKeyboard = {
//     reply_markup: {
//         inline_keyboard: [
//             [
//                 {
//                     text: 'YES',
//                     callback_data: JSON.stringify({
//                         'command': 'mycommand1',
//                         'answer': 'YES'
//                     })
//                 },
//                 {
//                     text: 'NO',
//                     callback_data: JSON.stringify({
//                         'command': 'mycommand1',
//                         'answer': 'NO'
//                     })
//                 },
//             ]
//         ]
//     }
// };

// // Listener (handler) for showcasing inline keyboard layout
// bot.onText(/\/inline/, (msg) => {
//     bot.sendMessage(msg.chat.id, 'You have to agree with me, OK?', inlineKeyboard);
// });

// // Keyboard layout for requesting phone number access
// const requestPhoneKeyboard = {
//     "reply_markup": {
//         "one_time_keyboard": true,
//         "keyboard": [[{
//             text: "My phone number",
//             request_contact: true,
//             one_time_keyboard: true
//         }], ["Cancel"]]
//     }
// };

// // Listener (handler) for retrieving phone number
// bot.onText(/\/phone/, (msg) => {
//     bot.sendMessage(msg.chat.id, 'Can we get access to your phone number?', requestPhoneKeyboard);
// });

// // Handler for phone number request when user gives permission
// bot.on('contact', async (msg) => {
//     const phone = msg.contact.phone_number;
//     bot.sendMessage(msg.chat.id, `Phone number saved: ${phone}`);
// })

// // Listener (handler) for telegram's /start event
// // This event happened when you start the conversation with both by the very first time
// // Provide the list of available commands
// bot.onText(/\/start/, (msg) => {
//     const chatId = msg.chat.id;
//     bot.sendMessage(
//         chatId,
//         `
//             Welcome at <b>ArticleBot</b>, thank you for using my service
      
//             Available commands:
        
//             /bookmark <b>URL</b> - save interesting article URL
//         `, {
//             parse_mode: 'HTML',
//         }
//     );
// });

// Move the package imports to the top of the file
