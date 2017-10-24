var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

/* GET home page. */
router.get('/', function(req, res, next) {
  knex('books').select().then(books => res.json(books))
});

router.get('/:id', function(req, res) {
  knex('books').select().where('id', req.params.id).then(books => res.json(books))
});

router.post('/', function(req, res) {
  knex('books').insert(req.body).then(() => {
    knex('books').select().then(books => res.json(books))
  });
});

router.patch('/:id', function(req, res) {
  knex('books').update(req.body).where('id', req.params.id).then(function() {
    knex('books').select().then(books => res.json(books))
  });
});
  
router.delete('/:id', function(req, res) {
  knex('books').del().where('id', req.params.id).then(function() {
    knex('books').select().then(books => res.json(books))
  });
});
  

module.exports = router;
