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
  let newCar = {
    year: req.body.year,
    make: req.body.make,
    model: req.body.model,
    miles: req.body.miles,
    price: req.body.price,
    photo_url: req.body.photo_url
  }
  knex('cars').returning('id').insert(newCar).then((result) => {
    let car_id = result[0]
    knex('cars_locations')
      .insert({
        car_id: car_id,
        location_id: req.body.location_id
      })
      .then(() => {
        knex('cars_locations')
          .select('cars.id', 'cars.year', 'cars.make', 'cars.model', 'cars.miles', 'cars.price', 'cars.photo_url', 'cars_locations.location_id')
          .join('cars', 'cars_locations.car_id', 'cars.id')
          .then(inventory => res.json(inventory))
    });
  });
});

router.patch('/:id', function (req, res) {
  knex('cars').update(req.body).where('id', req.params.id).then(function () {
    knex('cars_locations')
      .select('cars.id', 'cars.year', 'cars.make', 'cars.model', 'cars.miles', 'cars.price', 'cars.photo_url', 'cars_locations.location_id')
      .join('cars', 'cars_locations.car_id', 'cars.id')
      .then(inventory => res.json(inventory))
  });
});

router.delete('/:id', function (req, res) {
  knex('cars').del().where('id', req.params.id).then(function () {
    knex('cars_locations')
      .select('cars.id', 'cars.year', 'cars.make', 'cars.model', 'cars.miles', 'cars.price', 'cars.photo_url', 'cars_locations.location_id')
      .join('cars', 'cars_locations.car_id', 'cars.id')
      .then(inventory => res.json(inventory))
  });
});


module.exports = router;
