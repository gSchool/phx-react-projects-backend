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
