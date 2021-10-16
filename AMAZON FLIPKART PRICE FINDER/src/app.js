var bot=require('./config/bot')
const db=require('./config/mongoose')

const{startBot}=require('./controllers/start')
const{sendPrice}=require('./controllers/sendPrice')


bot.onText(/\/start/,startBot);


 bot.onText(/\/bookmark/,sendPrice);

// function checkAvailability() {
    
//     urls.forEach(async (url)=>{
//         const product = await pricefinder(url.url, "amazon");
//         if(product.available && product.price){
//             await  bot.sendMessage(
//                 url.user,
//                 `Item is available and price is ${product.price}`,
//             );
//             urls =await urls.filter(function(value, index, arr){ 
//                 return value!=url;
//             });
//             console.log(urls)
//         }
//     })
// }

// setInterval(checkAvailability, 5000); 
