// module.exports = (app) => {
//     const song = require('../controllers/song')
//     const multipart = require('connect-multiparty')
//     const uploadSong = multipart({uploadDir: './assets/songs'})

//     app.post('/create-song', uploadSong, song.create)
// }
const express = require('express')
const song = require('../controllers/song')
const mdAuth = require('../middlewares/authenticated')


const api = express.Router()
const multipart = require('connect-multiparty')
const uploadSong = multipart({ uploadDir: './assets/songs' })

api.post('/create-song', mdAuth.authUser, uploadSong, song.create)
api.put('/update-song/:idSong', mdAuth.authUser, uploadSong, song.update)
api.get('/getAll/:page', mdAuth.authUser, song.findAll)
api.get('/getSongFile/:nameSong', song.getSongFile)
api.get('/getTotalSongs', mdAuth.authUser, song.getTotalSongs)

module.exports = api