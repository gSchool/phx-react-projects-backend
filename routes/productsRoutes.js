var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

/* GET home page. */
router.get('/', function (req, res, next) {
  knex('products').select().then(products => res.json(products))
});

router.get('/:id', function (req, res) {
  knex('products').select().where('id', req.params.id).then(product => res.json(product))
});

router.post('/', function (req, res) {
  knex('products').insert(req.body).then(() => {
    knex('products').select().then(products => res.json(products))
  });
});

router.patch('/:id', function (req, res) {
  knex('products').update(req.body).where('id', req.params.id).then(function () {
    knex('products').select().then(products => res.json(products))
  });
});

router.delete('/:id', function (req, res) {
  knex('products').del().where('id', req.params.id).then(function () {
    knex('products').select().then(products => res.json(products))
  });
});


module.exports = router;
