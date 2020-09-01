var express = require('express');

var controller = require('../controllers/film.api.controller')

var router = express.Router();

router.get('/', controller.index);
router.get('/search', controller.FindFilm)
module.exports = router;