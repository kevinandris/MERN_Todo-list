// ! requires
const connectDb = require('./db/connect')
const express = require('express')
const router = require('./routes/crud')
require('dotenv').config()

const app = express()
const port = 5000;


// ! Middleware
app.use(express.json())

// ! Routes
app.use('/api/v1/crud', router)

// ! Connection
const start = async () => {
    try {
        await connectDb(process.env.MONGO_CONNECT)
        app.listen(port, (req, res) => {
            console.log('You are listening to port: ', port)
        })
    } catch (error) {
        console.log(error)
    }
}

start();
