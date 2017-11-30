var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

/* GET home page. */
router.get('/', function(req, res) {
  knex('cars_locations')
    .select('cars.id', 'cars.year', 'cars.make', 'cars.model', 'cars.miles', 'cars.price', 'cars.photo_url', 'cars_locations.location_id')
    .join('cars', 'cars_locations.car_id', 'cars.id')
    .then(inventory => res.json(inventory))
});

router.get('/:id', function(req, res) {
  knex('cars_locations')
    .select('cars.id', 'cars.year', 'cars.make', 'cars.model', 'cars.miles', 'cars.price', 'cars.photo_url', 'cars_locations.location_id')
    .join('cars', 'cars_locations.car_id', 'cars.id')
    .where('cars_locations.location_id', req.params.id)
    .then(inventory => res.json(inventory))
});

router.post('/', function (req, res) {
  knex('cars').insert(req.body).then(() => {
    knex('cars').select().then(cars => res.json(cars))
  });
});

router.patch('/:id', function (req, res) {
  knex('cars').update(req.body).where('id', req.params.id).then(function () {
    knex('cars').select().then(cars => res.json(cars))
  });
});

router.delete('/:id', function (req, res) {
  knex('cars').del().where('id', req.params.id).then(function () {
    knex('cars').select().then(cars => res.json(cars))
  });
});


module.exports = router;
