var express = require('express');
var router = express.Router();
var passport = require('passport');
var path = require('path');
var pg = require('pg');

//adding database to server
var config = {
 database: 'whatday_when_db', // name of your database
 host: 'localhost', // where is your database?
 port: 5432, // port for the database
 max: 10, // how many connections at one time?
 idleTimeoutMillis: 30000 // 30 second time out
};

var pool = new pg.Pool(config);

// Handles login form POST from index.html
router.post('/',
    passport.authenticate('local', { // local strategy - userStrategy.js
        // request stays within node/express and is routed as a new request
        successRedirect: '/user'   // goes to routes/user.js
    })
);

// Handle index file separately
// Also catches any other request not explicitly matched elsewhere
router.get('/', function(req, res) {
  console.log('request for index');
  res.sendFile(path.join(__dirname, '../public/views/index.html'));
});

router.get('/*', function(req, res) {
  console.log('404 : ', req.params);
  res.sendStatus(404);
});

module.exports = router;
