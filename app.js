var express = require('express')
var app = express();
const path = require('path')
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/web_film')

var port = 3000

app.set('view engine', 'pug');
app.set('views', './views')
app.use(express.static(path.join(__dirname, 'views')));

var acceuilRouter = require('./routes/acceuil.routes')

app.use('/', acceuilRouter)

app.listen(port, function(){
    console.log('Server listening on port ' + port);
})