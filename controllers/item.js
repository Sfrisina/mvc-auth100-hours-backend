const Item = require("../models/Item")

module.exports = {
    getItemById: async (req,res)=>{
        try {
            const item = await Item.findById(req.params.id)
            console.log(item)
        res.render('item.ejs', {item: item})
        }catch(err){
            console.log(err)
        }
    }
}