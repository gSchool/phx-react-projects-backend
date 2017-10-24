var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

/* GET home page. */
router.get('/', function (req, res, next) {
    knex('posts').select().then(posts => res.json(posts))
});

router.get('/:id', function (req, res) {
    knex('posts').select().where('id', req.params.id).then(posts => res.json(posts))
});

router.post('/', function (req, res) {
    knex('posts').insert(req.body).then(() => {
        knex('posts').select().then(posts => res.json(posts))
    });
});

router.patch('/:id', function (req, res) {
    knex('posts').update(req.body).where('id', req.params.id).then(function () {
        knex('posts').select().then(posts => res.json(posts))
    });
});

router.delete('/:id', function (req, res) {
    knex('posts').del().where('id', req.params.id).then(function () {
        knex('posts').select().then(posts => res.json(posts))
    });
});


module.exports = router;
