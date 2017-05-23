
const express = require('express');
const router = express.Router();
const User = require('../models/post');
const connection = require('../models/post');// var express = require('express');
// var router = express.Router();
// //var mongojs = require('mongojs');
// //var db = mongojs('mongodb://anil:anil@ds139899.mlab.com:39899/tasks-anil', ['tasks']);
// var mysql = require('mysql');
// var connection = mysql.createPool({
//     connectionLimit: 50,
//     host: 'localhost',
//     user: 'root',
//     password: 'myfp360',
//     database: 'todo'
// });

// //Get All Posts
// router.get('/tasks', function (req, resp, next) {
//     connection.getConnection(function (error, tmpconn) {
//         if (error) {
//             tmpconn.release();
//             resp.json(error);
//         } else {
//             tmpconn.query("select * from todos", function (error, rows, field) {
//                 tmpconn.release();
//                 if (error) {
//                     resp.json(error);
//                 } else {
//                     resp.json(rows);
//                 }
//             });
//         }
//     });
// });


// //Get One Post

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

// //Save Posts

// router.post('/task', function (req, resp, next) {
//     var task = req.body;

//     if (!task.title || !(task.isDone + '')) {
//         res.status(400);
//         res.json({
//             "error": "Bad Data"
//         });
//     } else {
//         connection.getConnection(function (error, tmpconn) {
//             if (error) {
//                 tmpconn.release();
//                 resp.json(error);
//             } else {
//                 tmpconn.query("INSERT INTO todos SET ?" ,task, function (error, rows) {
//                     tmpconn.release();
//                     if (error) {
//                         resp.json(error);
//                     } else {
//                         task.id=rows.insertId;
//                         resp.json(task);
//                     }
//                 });
//             }
//         });
//     }
// });

// //delete Post

// router.delete('/task/:id', function (req, resp, next) {
//     connection.getConnection(function (error, tmpconn) {
//         if (error) {
//             tmpconn.release();
//             resp.json(error);
//         } else {
//             tmpconn.query("DELETE FROM todos where id="+req.params.id, function (error, row) {
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

// //Update Post

// router.put('/task/:id', function (req, resp, next) {
//     var task = req.body;
//     console.log(task.isDone+" : "+task.createdDate+" : "+req.params.id);
//     var updTask = {};
//     if (task.isDone) {
//         updTask.isDone = task.isDone;
//     }
//     if (task.title) {
//         updTask.title = task.title;
//     }

//     if (!updTask) {
//         res.status(400);
//         res.json({
//             "error": "Bad Data ..."
//         })
//     } else {
//         connection.getConnection(function (error, tmpconn) {
//         if (error) {
//             tmpconn.release();
//             resp.json(error);
//         } else {
//             tmpconn.query("Update todos set isDone=?,createdDate=? where id=?",[task.isDone,task.createdDate,req.params.id], function (error, row) {
//                 tmpconn.release();
//                 if (error) {
//                     resp.json(error);
//                 } else {
//                     resp.json(row);
//                 }
//             });
//         }
//     });
//     }
// });

module.exports = router;