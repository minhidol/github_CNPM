var express = require('express')
var app = express();
const path = require('path')

var port = 3000

app.set('view engine', 'pug');
app.set('views', './views')
app.use(express.static(path.join(__dirname, 'views')));

app.get('/', function(req, res) {
    res.render('acceuil',{film:film});
})

// database test 
var film = [
    {id:1, name:'Sex1', content:'Phim nói về anh thợ sửa ông nước', img:'../img_phone/iPhone/iPhone 11 Pro Max.jpg'},
    {id:2, name:'Sex2', content:'Phim nói về cao giáo thảo', img:'../img_phone/iPhone/iPhone 11 Pro.jpg'}
]
app.get('/:id',function(req,res)
{
    var id = parseInt(req.params.id);
    var _film = film.find(x=>x.id===id);
    res.render('detail', {film1:_film})
    //res.render('detail');
})

app.listen(port, function(){
    console.log('Server listening on port ' + port);
})