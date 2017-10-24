var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

/* GET home page. */
router.get('/', function (req, res, next) {
  knex('cars').select().then(cars => res.json(cars))
});

router.get('/:id', function (req, res) {
  knex('cars').select().where('id', req.params.id).then(cars => res.json(cars))
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
