var express = require('express');
var bookRouter = express.Router();

var router = function (nav){
   var books = [
    {
        title: 'War and Peace',
        genre: 'Classics',
        author: 'Mr Ramesh Chaurasiya',
        read: false
    }, {
        title: 'Les Miseraples',
        genre: 'Classics',
        author: 'Mr Prankul AGarwal',
        read: false
    }, {
        title: 'Untouchables',
        genre: 'fiction',
        author: 'Mrs Anjali Bansal',
        read: false
    }, {
        title: 'Twilight',
        genre: 'ROmantic',
        author: 'Anjali Agarwal',
        read: false
    }, {
        title: 'Love hi Love',
        genre: 'ROmance',
        author: 'Prankul Anjali',
        read: false
    }
];

bookRouter.route('/')
    .get(function (req, res) {
        res.render('booklist', {
            title: 'Hello from EJS',
            nav: nav,
            books: books
        });
    });

bookRouter.route('/:id')
    .get(function (req, res) {
        var id = req.params.id;
         res.render('book', {
            title: 'Hello from EJS',
            nav: nav,
            book: books[id]
        });
    });


    return bookRouter;
};



module.exports = router;
