const Item = require('../models/Item')

module.exports = {
    getTodos: async (req, res) => {
        try {
            res.render('afterLogin.ejs')
        }catch(err) {
            console.log(err)
        }
    }, 
    createItem: async (req, res) => {
        try {
            await Item.create({
                itemNum: req.body.itemNum,
                description: req.body.description,
                quantity: req.body.quantity, 
                image: req.body.image, 
                inCart: false, })
                console.log('Item Added')
                res.redirect('/afterLogin')
        }catch (err){
            console.log(err);
        }
    }
}