var express = require('express');
var router = express.Router();

// Database Testing
router.get('/skaterSummary.json', function(req, res, next) {
    req.pool.getConnection(function(err, connection) {
        if (err) throw err;
        var query = "SELECT * from Summary";
        connection.query(query, function(err, results) {
            if (err) throw err;
            connection.release();
            res.json(results); // send response
        });
    });
});

// Database Testing
router.get('/skaterElements.json', function(req, res, next) {
    req.pool.getConnection(function(err, connection) {
        if (err) throw err;
        var query = "SELECT * from Elements";
        connection.query(query, function(err, results) {
            if (err) throw err;
            connection.release();
            res.json(results); // send response
        });
    });
});

// Database Testing
router.get('/skaterComponents.json', function(req, res, next) {
    req.pool.getConnection(function(err, connection) {
        if (err) throw err;
        var query = "SELECT * from Components";
        connection.query(query, function(err, results) {
            if (err) throw err;
            connection.release();
            res.json(results); // send response
        });
    });
});

// Database Testing
router.post('/getSkaterLimit.json', function(req, res, next) {
    
    // Generate Custom Query
    var query = "SELECT * FROM Summary"
    if (req.body.SkaterName) {
        query += " WHERE SkaterName = ?";
        SkaterName = req.body.SkaterName;
    }
    query += " ORDER BY TotalSegment";
    //query += " DESC LIMIT 20";
    query += ";";

    // Send query
    SkaterName = req.body.SkaterName;
    req.pool.getConnection(function(err, connection) {
        if (err) throw err;
        connection.query(query, [SkaterName], function(err, results) {
            if (err) throw err;
            connection.release();
            res.json(results); // send response
        });
    });
});

// List of Skaters 
router.get('/SkaterNames.json', function(req, res, next) {
    req.pool.getConnection(function(err, connection) {
        if (err) { 
            console.error(err);
            return next(new Error('Server Error')); 
        }

        var query = "SELECT DISTINCT SkaterName, Nation FROM Summary;";
        connection.query(query, function(err, results) {
            if (err) { 
                console.error(err);
                return next(new Error('Server Error')); 
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
