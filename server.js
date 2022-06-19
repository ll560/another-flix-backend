const express = require('express')
const app=express()
require('dotenv').config()
require('./config/database')

//====ROUTES====
app.use('/api/v1/movies', require('./routes/api/movies.js'))


//====PORT====
const port = 8080
app.listen(port, () => console.log('Express app running on port'))