var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

/* GET home page. */
router.get('/', function (req, res, next) {
    knex('comments').select().then(comments => res.json(comments))
});

router.get('/:id', function (req, res) {
    knex('comments').select().where('id', req.params.id).then(comments => res.json(comments))
});

router.post('/', function (req, res) {
    knex('comments').insert(req.body).then(() => {
        knex('comments').select().then(comments => res.json(comments))
    });
});

router.patch('/:id', function (req, res) {
    knex('comments').update(req.body).where('id', req.params.id).then(function () {
        knex('comments').select().then(comments => res.json(comments))
    });
});

router.delete('/:id', function (req, res) {
    knex('comments').del().where('id', req.params.id).then(function () {
        knex('comments').select().then(comments => res.json(comments))
    });
});


module.exports = router;
