var express = require('express');
var app = express();
var port = process.env.PORT || 5000;
var ejs = require('ejs');

var nav = [{
                Link: '/books',
                Text: 'Books'
        }, {
                Link: '/authors',
                Text: 'Authors'
        }];

var bookRouter = require('./src/routes/booksRoutes')(nav);
var authorRouter = require('./src/routes/authorRoutes')(nav);
var adminRouter = require('./src/routes/adminRoutes')(nav);

app.use(express.static('public'));
app.set('views', './src/views');

app.set('view engine', 'ejs');

app.get('/', function (req, res) {
    res.render('index', {
        title: 'Hello from EJS',
        nav: nav
    });
});

// Defining the Routes....

app.use('/authors', authorRouter);
app.use('/books', bookRouter);
app.use('/admin', adminRouter);


app.listen(port, function () {
    console.log('Server is running successfully at ' + port);
});
