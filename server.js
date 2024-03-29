const express = require('express')
const app = express()
const mongoose = require ('mongoose')
const passport = require('passport')
const session = require('express-session')
const MongoStore = require('connect-mongo')(session)
const flash = require('express-flash')
const logger = require('morgan')
const methodOverride = require("method-override");
const connectDB = require('./config/database')
const mainRoutes = require('./routes/main')
const afterLoginRoutes = require('./routes/afterLogin')
const itemRoutes = require('./routes/item')
const cartRoutes = require('./routes/cart')
const path = require('path')
// const { Console } = require('console')

require('dotenv').config({path: './config/.env'})

//passport config
require('./config/passport')(passport)

connectDB()

app.set('view engine', 'ejs')
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(logger('dev'))
app.use(methodOverride("_method"));
//Sessions
app.use(
    session({
        secret: 'keyboard cat', 
        resave: false,
        saveUninitialized: false,
        store: new MongoStore({ mongooseConnection: mongoose.connection }),
    })
)

//passport middleware
app.use(passport.initialize())
app.use(passport.session())

app.use(flash())

app.use('/', mainRoutes)
app.use('/afterLogin', afterLoginRoutes)
app.use('/item', itemRoutes)
app.use('/cart', cartRoutes)

app.listen(process.env.PORT, () => {
    console.log('Server Running!!!!!')
})
