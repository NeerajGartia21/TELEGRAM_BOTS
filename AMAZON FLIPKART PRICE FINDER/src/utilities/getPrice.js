const scrapeIt = require("scrape-it");

module.exports.getPrice=(url)=>{
    scrapeIt(url, {
        
        price: {
           selector:'._16Jk6d'
       }
   
}, (err, price ) => {
   console.log(price)
})
}

