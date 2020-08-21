var Film = require('../models/film.models')

const homePage = (req,res)=>
{
    Film.find().then(function(films)
    {
        res.render('acceuil',{film:films});
    })
}

const detail_Film = (req,res)=>
{
    Film.find().then(function(films)
    {
        var id = req.params.id;
        var _film = films.find(x=>x.id===id);
        res.render('detail',{film:_film})
    })
}

module.exports = {
    homePage,
    detail_Film
};