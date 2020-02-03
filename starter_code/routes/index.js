const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie');

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/movies', (req, res, next) => {
  Movie.find({})
    .then(movies => {
      console.log(movies);
      res.render('movies', { data: movies });
    })
    .catch(err => {
      next(err);
    });
});

router.get('/movie/:id', (req, res, next) => {
  Movie.findById(req.params.id)
    .then(movie => {
      res.render('movie', { data: movie });
    })
    .catch(err => {
      next(err);
    });
});

module.exports = router;
