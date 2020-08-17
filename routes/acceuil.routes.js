var express = require('express');
var router = express.Router();

const ctrlFilm = require('../controllers/film.controllers')


router.get('/', ctrlFilm.homePage)
// database test 

router.get('/:id', ctrlFilm.detail_Film)


module.exports = router;