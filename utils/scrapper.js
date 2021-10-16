const scrapeIt = require("scrape-it");

scrapeIt("https://www.flipkart.com/hp-m270-wired-optical-gaming-mouse/p/itmef9cc34968e2d?pid=ACCFZPG3ZGVQUUDZ&lid=LSTACCFZPG3ZGVQUUDZPSXHA9&marketplace=FLIPKART&fm=productRecommendation%2Fattach&iid=R%3Aa%3Bp%3AACCFZPFTPYZCZ7GR%3Bpt%3App%3Buid%3A0d0aca63-2cbb-11ec-bc9a-f1b9721b5fd1%3B.ACCFZPG3ZGVQUUDZ&ppt=None&ppn=None&ssid=bm9118hao00000001634194243304&otracker=pp_reco_Frequently%2BBought%2BTogether_1_Frequently%2BBought%2BTogether_ACCFZPG3ZGVQUUDZ_productRecommendation%2Fattach_1&otracker1=pp_reco_PINNED_productRecommendation%2Fattach_Frequently%2BBought%2BTogether_NA_productCard_cc_1_NA_view-all&cid=ACCFZPG3ZGVQUUDZ", {
        
         price: {
            selector:'._16Jk6d'
        }
    
}, (err, price ) => {
    console.log(price)
})

module.exports=scrapeIt;