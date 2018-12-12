var express = require('express');
var router = express.Router();

// Database Testing
router.get('/skaterSummary.json', function(req, res, next) {
  req.pool.getConnection(function(err, connection) {
    if (err) throw err;
    var query = "SELECT * from Summary";
    connection.query(query, function(err, results) {
      res.json(results); // send response
    });
  });
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
