const Item = require("../models/Item")

module.exports = {
    getCartItemById: async (req,res)=>{
        try {
            const item = await Item.findById(req.params.id)
            const qty = req.query.qty
            const data = {
                item, 
                qty
            }
            if(typeof window !== "undefined") {
                if(localStorage.getItem("watchlist")) {
                  return JSON.parse(localStorage.getItem("watchlist"))
                } else{
                return []
                }
             }
            console.log(item)
            console.log(data)
        res.render('cart.ejs', {item: item})
        }catch(err){
            console.log(err)
        }
    }


}