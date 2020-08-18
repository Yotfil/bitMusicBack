const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//Rutas
const user_routes = require('./routes/user')
const song_routes = require('./routes/song')





//middleware
app.use('/api', user_routes)
app.use('/api', song_routes)


// app.get('/pruebas', (req, res) =>{
//     res.status(200).send({message: 'Está conectada nuestra API'})
// })


module.exports = app;