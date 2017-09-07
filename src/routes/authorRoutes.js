var express = require('express');
var authorRouter = express.Router();

var router = function (nav) {

     var authors = [
    {
        author: 'Mr Ramesh Chaurasiya',
        about:  'Ramesh has over 30 years experience of writing software, and developing websites and apps.',
        genre: 'Classics'
    }, {
        author: 'Herbert Schildt',
        about:  'Herbert Schildt is an American computing author, programmer and musician. He has written books about the C and Java programming languages.',
        genre: 'Technology'
    },{
        author: 'Fredrik Backman',
        about:  'Fredrik Backman, a blogger and columnist, is the New York Times bestselling author of A MAN CALLED OVE and MY GRANDMOTHER ASKED ME TO TELL YOU SHE’S SORRY.',
        genre:  'Fiction'
    },{
        author: 'David Grann',
        about:  'DAVID GRANN is a #1 New York Times bestselling author and an award-winning staff writer at The New Yorker magazine.',
        genre: 'Mystery'
    },{
        author: 'Arundhati Roy',
        about:  'Arundhati Roy is the author of a number of books, including The God of Small Things, which won the Booker Prize in 1997.',
        genre: 'Classics'
    }
];

    authorRouter.route('/')
        .get(function (req, res) {
            res.render('authors', {
                title: "Authors",
                nav: nav,
                authors: authors
                });
        });





    return authorRouter;
};

module.exports = router;
