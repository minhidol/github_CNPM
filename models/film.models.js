var mongoose = require('mongoose');

var filmSchema = new mongoose.Schema({
    name: String,
    description: String,
    type: String,
    images: String

})

var film = mongoose.model('film', filmSchema, 'film')

module.exports =film;