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
<<<<<<< HEAD
                image: req.body.image,
                price: req.body.price, 
=======
                image: req.body.image, 
>>>>>>> b4cc2f24589441322feee41aa6e5551d1004dde4
                inCart: false, })
                console.log('Item Added')
                res.redirect('/afterLogin')
        }catch (err){
            console.log(err);
        }
    }
}