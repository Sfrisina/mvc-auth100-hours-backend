const express = require('express')
const router = express.Router()
const todosController = require('../controllers/afterLogin')
const afterLoginController = require('../controllers/afterLogin') 
const { ensureAuth } = require('../middleware/auth')

router.get('/', ensureAuth)
router.get('/', ensureAuth, todosController.getTodos)

router.post('/createItem', afterLoginController.createItem)




module.exports = router