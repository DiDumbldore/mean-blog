const mysql = require('mysql');

var pool  = mysql.createPool({
  connectionLimit : 20,
  host            : '194.88.219.69',
  user            : 'business-times',
  password        : 'jDavd3wwSE4DtwHt',
  database        : 'business-times'
});


pool.getConnection(function (err, connection) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log('connected as id ' + connection.threadId);
});

//pool.end(function (err) { });

pool.query("SELECT * FROM `userStructure`", function (error, results, fields) {
    // console.log(error, results, fields);
});

//get all users
module.exports.findAll = function (callback) {
    pool.query('SELECT * FROM userStructure ORDER BY id DESC', function (error, results, fields) {
        console.log(results, fields);
    });
}


//filter users by email
module.exports.findByEmail = function(email, callback) {
	pool.query("SELECT * FROM `userStructure` WHERE `email` = ?", [email], callback);
}

