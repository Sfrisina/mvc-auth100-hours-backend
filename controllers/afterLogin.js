const express = require('express')
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
                price: req.body.price, 
                inCart: false, })
                console.log('Item Added')
                res.redirect('/afterLogin')
                console.log(req)
        }catch (err){
            console.log(err);
        }
    },
    searchItem: async (req, res) => {
        try {
            let data = await Item.findOne({ 
                itemNum: req.query.itemNum        
        })
            // await Item.findOne({
              
            // })
            // console.log(res)
            // console.log('item found')
            // res.render('afterLogin', {data: itemNum})
            console.log(data)
            res.redirect('/afterLogin')
        }catch (err){
            console.log(err)
        }
    },
    updateItem: async (req, res) => {
        try {
           await Item.findOneAndUpdate(
            { itemNum: req.body.itemNum },
           {quantity: req.body.quantity, price: req.body.price}
          );
          console.log(res)
          console.log("item updated");
          res.redirect('/afterLogin');
        } catch (err) {
          console.log(err);
        }
    }
}