const mongoose = require('mongoose')
const Schema = mongoose.Schema


const UserSchema = Schema({
    firstName: String,
    lastname: String,
    email: String,
    password: String,
    role: String,
    image: String
})


module.exports = mongoose.model('User', UserSchema)