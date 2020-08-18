const mongoose = require('mongoose')
const Schema = mongoose.Schema


const ArtistSchema = Schema({
    firstName: String,
    description: String,
    image: String,
})


module.exports = mongoose.model('Artist', ArtistSchema)