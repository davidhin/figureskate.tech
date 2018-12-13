var express = require('express');
var router = express.Router();

// Database Testing
router.get('/skaterSummary.json', function(req, res, next) {
    req.pool.getConnection(function(err, connection) {
        if (err) throw err;
        var query = "SELECT * from Summary";
        connection.query(query, function(err, results) {
            if (err) throw err;
            res.json(results); // send response
        });
    });
});

// List of Skaters 
router.get('/SkaterNames.json', function(req, res, next) {
    req.pool.getConnection(function(err, connection) {
        if (err) {
            console.log(err);
            res.send({ success: false, message: 'database error', error: err });
            return;
        }

        var query = "SELECT DISTINCT SkaterName FROM Summary;";
        connection.query(query, function(err, results) {
            if (err) {
                console.log(err);
                res.send({ success: false, message: 'query error', error: err });
                return;
            }

            connection.release();
            res.json(results); // send response
        });
    });
});

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

module.exports = router;
