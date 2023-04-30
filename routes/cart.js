const express = require('express')
const router = express.Router()
const cartController = require('../controllers/cart')


router.get('/:id', cartController.getCartItemById)







module.exports = router