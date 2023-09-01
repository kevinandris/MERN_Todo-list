const express =require('express')

const app = express()
const port = 5000;

// ! Routers
app.get('/', (req, res) => {
    res.status(200).send('All is working');
})

app.listen(port, (req, res) => {
    console.log('You are listening to port: ', port)
})