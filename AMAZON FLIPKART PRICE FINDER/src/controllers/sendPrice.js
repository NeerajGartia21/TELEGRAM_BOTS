const {getPrice}=require('../utilities/getPrice')

module.exports=sendPrice=async function(msg,match){
    const chatId = msg.chat.id;
     const url = match.input.split(' ')[1];
     getPrice(url);
    //  if (url === undefined) {
    //      bot.sendMessage(
    //          chatId,
    //          'Please provide URL of article!',
    //      );
    //      return;
    //  }
    //   const product = await pricefinder(url, "amazon");
    //   if(product.available && product.price){
    //      bot.sendMessage(
    //          chatId,
    //          `Item is available and price is ${product.price}`,
    //      );
    //  }else{
    //      bot.sendMessage(
    //          chatId,
    //          `Item is not available.We will notify when it will come to stock`
    //      );
    //      urls.push({
    //          user:chatId,
    //          url:url
    //      })
    //  }
}