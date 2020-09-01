var express = require('express')
var app = express();
const path = require('path')
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/web_xemphim')

var port = 3000

app.set('view engine', 'pug');
app.set('views', './views')
app.use(express.static(path.join(__dirname, 'views')));

var acceuilRouter = require('./routes/acceuil.routes')
// var APIFilmRouter = require('./API/routes/film.api.routes')
var APIFilmRouter = require('./API/routes/film.api.routes')
// app.use('/API/film', APIFilmRouter)

app.use('/', acceuilRouter)
app.use('/API/film', APIFilmRouter)

app.listen(port, function(){
    console.log('Server listening on port ' + port);
})