//to load .env file
require('dotenv').config()
// import express
const express = require('express')
// import cors
const cors = require('cors')

// import router
const router = require('./Routes/routes')

// import db
require('./DB/connection')

// to create express server
const fserver = express()



fserver.use(cors())
// parse json data using server app
fserver.use(express.json())

// use router
fserver.use(router)
// customise port for server app
const PORT = 4000 || process.env.PORT

fserver.use('/uploads',express.static('./uploads'))

// to run server app
fserver.listen(PORT,()=>{
    console.log(`Muebles server started at port ${PORT} `);
})



fserver.get('/',(req,res)=>{
    res.send(`<h1>Project Fair Server Started!!!</h1>`)
})
// Xgarage