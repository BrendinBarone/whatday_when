var express = require('express');
var router = express.Router();
var path = require('path');
var pool = require('../modules/pool.js');
var encryptLib = require('../modules/encryption');
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

// NOTE GET ROUTE
router.get('/', function(req, res) {
  // errorConnecting is bool, db is what we query against,
  // done is a function that we call when we're done
  pool.connect(function(errorConnectingToDatabase, db, done) {
    if (errorConnectingToDatabase) {
      console.log('Error connecting to the database.');
      res.sendStatus(500);
    } else {
      // We connected to the database!!!
      // Now we're going to GET things from the db
      var queryText = 'SELECT "tasks"."id", "tasks"."user_id", "tasks"."taskname",' +
        '"tasks"."date", "tasks"."time", "tasks"."notes", "users"."username" ' +
        'FROM "tasks" JOIN "users" ON "users"."id" = "tasks"."user_id"' +
        'WHERE "users"."id"= $1 AND "completed"= false ORDER BY "time" ASC ;';
      // errorMakingQuery is a bool, result is an object
      db.query(queryText, [req.user.id], function(errorMakingQuery, result) {
        done();
        if (errorMakingQuery) {
          console.log('Attempted to query with', queryText);
          console.log('Error making query');
          res.sendStatus(500);
        } else {
          console.log(result.rows);
          // Send back the results
          res.send(result.rows);
        }
      }); // end query
    } // end if
  }); // end pool
}); // end of GET


// NOTE DELETE ROUTE
router.delete('/:id', function(req, res) {

  console.log("id is", req.params.id);
  // errorConnecting is bool, db is what we query against,
  // done is a function that we call when we're done
  pool.connect(function(errorConnectingToDatabase, db, done) {
    var id = req.params.id;
    console.log(id);
    if (errorConnectingToDatabase) {
      console.log('Error connecting to the database.');
      res.sendStatus(500);
    } else {
      // We connected to the database!!!
      // Now we're going to GET things from the db
      var queryText = 'DELETE FROM tasks WHERE "id" = $1;';
      // errorMakingQuery is a bool, result is an object
      db.query(queryText, [id], function(errorMakingQuery, result) {
        done();
        if (errorMakingQuery) {
          console.log('Attempted to query with', queryText, errorMakingQuery);
          console.log('Error making query');
          res.sendStatus(500);
        } else {
          console.log(result.rows);
          // Send back the results
          res.sendStatus(200);
        }
      }); // end query
    } // end if
  }); // end pool
}); // end of DELETE

// router.put('/:id', function(req, res){
//   var id = req.params.id;
//   // errorConnecting is bool, db is what we query against,
//   // done is a function that we call when we're done
//   pool.connect(function(errorConnectingToDatabase, db, done){
//     if(errorConnectingToDatabase) {
//       console.log('Error connecting to the database.');
//       res.sendStatus(500);
//     } else {
//       // We connected to the database!!!
//       // Now we're going to GET things from the db
//       var queryText = 'UPDATE "tasks" SET "completed" = true WHERE id= $1;';
//       // errorMakingQuery is a bool, result is an object
//       db.query(queryText, [id], function(errorMakingQuery, result){
//         console.log('update id:' id);
//         done();
//         if(errorMakingQuery) {
//           console.log('Attempted to query with', queryText);
//           console.log('Error making query');
//           res.sendStatus(500);
//         } else {
//           console.log(result.rows);
//           // Send back the results
//           res.sendStatus(200);
//         }
//       }); // end query
//     } // end if
//   }); // end pool
// }); // end of Update


module.exports = router;
