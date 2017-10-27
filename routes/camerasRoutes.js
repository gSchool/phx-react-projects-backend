var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

/* GET home page. */
router.get('/', function(req, res, next) {
  knex('cameras').select().then(cameras => res.json(cameras))
});

router.get('/:id', function(req, res) {
  knex('cameras').select().where('id', req.params.id).then(camera => res.json(camera))
});

router.post('/', function(req, res) {
  knex('cameras').insert(req.body).then(() => {
    knex('cameras').select().then(cameras => res.json(cameras))
  });
});

router.patch('/:id', function(req, res) {
  knex('cameras').update(req.body).where('id', req.params.id).then(function() {
    knex('cameras').select().then(cameras => res.json(cameras))
  });
});

router.delete('/:id', function(req, res) {
  knex('cameras').del().where('id', req.params.id).then(function() {
    knex('cameras').select().then(cameras => res.json(cameras))
  });
});


module.exports = router;
