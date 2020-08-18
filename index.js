const mongoose = require('mongoose'); //Requerimos mongoose para conectarnos con la base de datos
const app = require('./app'); //Requerimos nuestra app que configuramos en le archivo app.js
const {PORT} = process.env;
const port = 3000;

mongoose.set('useFindAndModify', false);
mongoose.Promise = global.Promise;


const URI = "mongodb+srv://bitMusicMaster:pn5mwi1Jq38yFckv@bitmusic.fwubh.mongodb.net/bitMusic?retryWrites=true&w=majority"

// const URI = "mongodb://localhost:27017/bitMusic"

mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true }, (err, res) => {
    if (err) {
        console.log('No nos pudimos conectar');
    } else {
        console.log('La base de datos funciona!');
        app.listen(PORT || port, () => {
            console.log(`El demonio está vigilando en el puerto ${PORT}`)

        })
    }
})