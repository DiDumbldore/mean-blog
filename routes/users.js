const express = require('express');
const router = express.Router();
const User = require('../models/user');
const connection = require('../models/user');
// const pool = require('../models/user');

// API Routes
// router.get('/users', function (req, res) {
//   User.findAll(function (err, rows, fields) {
//     if (err) throw err;
//     res.json(rows);
//   })
// });

// router.get('/users', function(req, res){
//   res.render('ROUTING CHECK');	
// });


//get all users
// router.get('/users', function(req, res) {
//     pool.getConnection(function(err, connection) {
//         if (err) {
//             console.error("An error occurred: " + err);
//         }
//         connection.query('SELECT * FROM `userStructure` WHERE 1"', function(err, rows) {
//             if (err) {
//                 throw err;
//             } else {
//                 res.writeHead(200, {
//                     "Content-Type": "application/json"
//                 });
//                 var result = {
//                     success: true,
//                     rows: rows.length,
//                 }
//               res.write(JSON.stringify(rows));

//                 res.end();
//             }
//            connection.release();
//         });
//     });
// });

//get user id

// router.get('/task/:id', function (req, resp, next) {
//     connection.getConnection(function (error, tmpconn) {
//         if (error) {
//             tmpconn.release();
//             resp.json(error);
//         } else {
//             tmpconn.query("select * from todos where id="+req.params.id, function (error, row, field) {
//                 tmpconn.release();
//                 if (error) {
//                     resp.json(error);
//                 } else {
//                     resp.json(row);
//                 }
//             });
//         }
//     });
// });



module.exports = router;