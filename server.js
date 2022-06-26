const express = require('express')
const app=express()
require('dotenv').config()
require('./config/database')

//====MIDDLEWARES===
app.use(express.json())

//Check if we have a token and create req.user
app.use(require('./config/checkToken'))


//====ROUTES====
//Users
app.use('/api/v1/users', require('./routes/api/users.js'))

//Protect API routes below from unauthorized users- line below calls on the function ensureLoggedIn for all the routes below restricting access
const ensureLoggedIn = require('./config/ensureLoggedIn')
//Movies
app.use('/api/v1/movies', ensureLoggedIn, require('./routes/api/movies.js'))

//====PORT====
const port = 8080
app.listen(port, () => console.log('Express app running on port'))