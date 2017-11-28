var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET bookshelf routes page. */
router.get('/projects/bookshelf', function(req, res, next) {
  res.render('bookshelf-project', { title: 'Express' });
});

/* GET vct routes page. */
router.get('/projects/vehicle-comparison-tool', function(req, res, next) {
  res.render('vct-project', { title: 'Express' });
});

/* GET reddit-clone routes page. */
router.get('/projects/reddit-clone', function(req, res, next) {
  res.render('reddit-clone-project', { title: 'Express' });
});

/* GET react-inbox routes page. */
router.get('/projects/react-inbox', function(req, res, next) {
  res.render('inbox-project', { title: 'Express' });
});

/* GET shopping cart routes page. */
router.get('/projects/shopping-cart', function(req, res, next) {
  res.render('shopping-cart-project', { title: 'Express' });
});

/* GET camera shop routes page. */
router.get('/projects/camera-shop', function(req, res, next) {
  res.render('camera-shop-project', { title: 'Express' });
});

/* GET mini-crm routes page. */
router.get('/projects/mini-crm', function (req, res, next) {
  res.render('mini-crm-project', { title: 'Express' });
});

module.exports = router;
