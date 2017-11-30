var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

/* GET home page. */
router.get('/', function (req, res, next) {
  knex('locations').select().then(locations => res.json(locations))
});

router.get('/:id', function (req, res) {
  knex('locations').select().where('id', req.params.id).then(locations => res.json(locations))
});

router.get('/:id/inventory', function(req, res) {
  knex('cars_locations')
    .select('cars.id', 'cars.year', 'cars.make', 'cars.model', 'cars.miles', 'cars.price', 'cars.photo_url', 'cars_locations.location_id')
    .join('cars', 'cars_locations.car_id', 'cars.id')
    .where('cars_locations.location_id', req.params.id)
    .then(inventory => res.json(inventory))
});

router.post('/', function (req, res) {
  knex('locations').insert(req.body).then(() => {
    knex('locations').select().then(locations => res.json(locations))
  });
});

router.patch('/:id', function (req, res) {
  knex('locations').update(req.body).where('id', req.params.id).then(function () {
    knex('locations').select().then(locations => res.json(locations))
  });
});

router.delete('/:id', function (req, res) {
  knex('locations').del().where('id', req.params.id).then(function () {
    knex('locations').select().then(locations => res.json(locations))
  });
});


module.exports = router;
