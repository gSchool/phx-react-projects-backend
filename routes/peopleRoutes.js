var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

/* GET home page. */
router.get('/', function (req, res, next) {
  knex('people').select().then(people => res.json(people))
});

router.get('/:id', function (req, res) {
  knex('people').select().where('id', req.params.id).then(person => res.json(person))
});

router.post('/', function (req, res) {
  knex('people').insert(req.body).then(() => {
    knex('people').select().then(people => res.json(people))
  });
});

router.patch('/:id', function (req, res) {
  knex('people').update(req.body).where('id', req.params.id).then(function () {
    knex('people').select().then(people => res.json(people))
  });
});

router.delete('/:id', function (req, res) {
  knex('people').del().where('id', req.params.id).then(function () {
    knex('people').select().then(people => res.json(people))
  });
});


module.exports = router;
