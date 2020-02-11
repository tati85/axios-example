const express = require('express');
const router = express.Router();
const axios = require('axios');
const pokeUrl = 'https://pokeapi.co/api/v2/pokemon';

router.get('/', (req, res, next) => {
  res.render('/pokemon-views/pokemon-list');
  axios.get(`${pokeUrl}`)
    .then((data) => {
      res.render('pokemon-views/pokemon-list', { pokemon: data.data.results });
    })
    .catch((err) => { next(err) })
});
router.get('pokemon/details/:pokeIndex', (req, res, next) => {
  axios.get(`${pokeUrl}/${Number(req.params.pokeIndex) + 1}`)
    .then((data) => {
      res.render('pokemon-views/details', { pokemon: data.data })
    })
    .catch(err => next(err))

})

module.exports = router;
