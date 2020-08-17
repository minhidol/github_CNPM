var mongoose = require('mongoose');

var filmSchema = new mongoose.Schema({
    name: String,
    description: String,
    datePublic: String,
})

var film = mongoose.model('film', filmSchema, 'film')

module.exports =film;