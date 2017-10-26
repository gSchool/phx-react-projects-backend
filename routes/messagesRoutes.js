var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

/* GET home page. */
router.get('/', function (req, res, next) {
  knex('messages').select().then(messages => res.json(messages))
});

router.get('/:id', function (req, res) {
  knex('messages').select().where('id', req.params.id).then(message => res.json(message))
});

router.post('/', function (req, res) {
  knex('messages').insert(req.body).then(() => {
    knex('messages').select().then(messages => res.json(messages))
  });
});

router.patch('/:id', function (req, res) {
  knex('messages').update(req.body).where('id', req.params.id).then(function () {
    knex('messages').select().then(messages => res.json(messages))
  });
});

router.delete('/:id', function (req, res) {
  knex('messages').del().where('id', req.params.id).then(function () {
    knex('messages').select().then(messages => res.json(messages))
  });
});


module.exports = router;
