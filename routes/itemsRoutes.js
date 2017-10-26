var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

/* GET home page. */
router.get('/', function (req, res, next) {
  knex('items').select().then(items => res.json(items))
});

router.get('/:id', function (req, res) {
  knex('items').select().where('id', req.params.id).then(item => res.json(item))
});

router.post('/', function (req, res) {
  knex('items').insert(req.body).then(() => {
    knex('items').select().then(items => res.json(items))
  });
});

router.patch('/:id', function (req, res) {
  knex('items').update(req.body).where('id', req.params.id).then(function () {
    knex('items').select().then(items => res.json(items))
  });
});

router.delete('/:id', function (req, res) {
  knex('items').del().where('id', req.params.id).then(function () {
    knex('items').select().then(items => res.json(items))
  });
});


module.exports = router;
