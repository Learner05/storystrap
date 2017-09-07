var express = require('express');
var adminRouter = express.Router();

var router = function(nav) {

    adminRouter.route('/addbooks')
        .get(function(req,res){
            res.send('Inserting Books....');
    });

    return adminRouter;
};


module.exports = router;
