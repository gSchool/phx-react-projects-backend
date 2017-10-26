var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

/* GET home page. */
router.get('/', function (req, res, next) {
  knex('meetings').select().then(meetings => res.json(meetings))
});

router.get('/:id', function (req, res) {
  knex('meetings').select().where('id', req.params.id).then(meeting => res.json(meeting))
});

router.post('/', function (req, res) {
  knex('meetings').insert(req.body).then(() => {
    knex('meetings').select().then(meetings => res.json(meetings))
  });
});

router.patch('/:id', function (req, res) {
  knex('meetings').update(req.body).where('id', req.params.id).then(function () {
    knex('meetings').select().then(meetings => res.json(meetings))
  });
});

router.delete('/:id', function (req, res) {
  knex('meetings').del().where('id', req.params.id).then(function () {
    knex('meetings').select().then(meetings => res.json(meetings))
  });
});


module.exports = router;
