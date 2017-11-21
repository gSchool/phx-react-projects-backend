var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var port = process.env.PORT || 8000;
var cors = require('cors');
var logger = require('morgan');
var knex = require('./db/knex');
var expressLayouts = require('express-ejs-layouts');

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(expressLayouts);
app.use(logger('dev'));
app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', require('./routes/indexRoutes'));

// Bookshelf Routes
app.use('/books', require('./routes/booksRoutes'));

// Vehicle Comparison Tool Routes
app.use('/cars', require('./routes/carsRoutes'));
app.use('/locations', require('./routes/locationsRoutes'));

// Reddit Clone Routes
app.use('/posts', require('./routes/postsRoutes'));
app.use('/comments', require('./routes/commentsRoutes'));

// React Inbox Routes
app.use('/messages', require('./routes/messagesRoutes'));

// Shopping Cart Routes
app.use('/products', require('./routes/productsRoutes'));
app.use('/items', require('./routes/itemsRoutes'));

// Camera routes
app.use('/cameras', require('./routes/camerasRoutes.js'));

app.listen(port, function() {
	console.log("listening on port: ", port);
})
