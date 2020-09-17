var film = require('../../models/film.models')

module.exports.index = async function(req,res){
    film.find().then(function(films)
    {
        res.json(films)
    })
    
}

module.exports.FindFilm = async function(req, res)
{
    var name_film = req.query.q;
    film.find({name:name_film}).then(function(films)
    {
        res.json(films)
    }
    )


}