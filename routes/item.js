const express = require('express')
const router = express.Router()
const itemController = require('../controllers/item')
const { ensureAuth } = require('../middleware/auth')


router.get('/addItem/:id', itemController.getItemById)
router.get('/', itemController.getItemById)






module.exports = router