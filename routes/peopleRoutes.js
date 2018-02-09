var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

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

router.post('/login', function (req, res, next) {
  knex('people')
    .where('email', req.body.email)
    .andWhere('password', req.body.password)
    .then(person => {
      if(person.length < 1) {
        res.sendStatus(400)
      } else {
        res.json(person[0])
      }
    })
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
