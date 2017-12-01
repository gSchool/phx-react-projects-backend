var express = require('express')
var router = express.Router()
var knex = require('../db/knex')

/* GET home page. */
router.get('/', function (req, res, next) {
  knex('posts').select().then(posts => res.json(posts))
})

router.get('/:id', function (req, res) {
  knex('posts').select().where('id', req.params.id).then(posts => res.json(posts))
})

router.get('/:id/comments', function(req, res) {
  knex('comments').where('post_id', req.params.id).then(comments => res.json(comments))
})

router.post('/', function (req, res) {
    knex('posts').insert(req.body).then(() => {
        knex('posts').select().then(posts => res.json(posts))
    })
})

router.patch('/votes/:post_id/inc', (req, res) => {
  knex('posts')
    .select()
    .where('id', req.params.post_id)
    .then((post) => {
      console.log('post', post)
      knex('posts')
        .update({ votes: post[0].votes + 1 })
        .where('id', req.params.post_id)
        .then(() => {
          knex('posts')
            .select()
            .then(posts => res.send(posts))
        })
    })
})

router.patch('/votes/:post_id/dec', (req, res) => {
  knex('posts')
    .select()
    .where('id', req.params.post_id)
    .then((post) => {
      console.log('post', post)
      knex('posts')
        .update({ votes: post[0].votes - 1 })
        .where('id', req.params.post_id)
        .then(() => {
          knex('posts')
            .select()
            .then(posts => res.send(posts))
        })
    })
})

router.patch('/:id', function (req, res) {
    knex('posts').update(req.body).where('id', req.params.id).then(function () {
        knex('posts').select().then(posts => res.json(posts))
    })
})

router.delete('/:id', function (req, res) {
    knex('posts').del().where('id', req.params.id).then(function () {
        knex('posts').select().then(posts => res.json(posts))
    })
})


module.exports = router
