const mysql = require('mysql');

var pool = mysql.createPool({
    connectionLimit: 20,
    host: '194.88.219.69',
    user: 'business-times',
    password: 'jDavd3wwSE4DtwHt',
    database: 'business-times'
});


// pool.query("SELECT `category` FROM `postStructure`", function(err, rows, fields)   
// {  
//   if (err) throw err;  
  
//   console.log(rows);  
// });  



//get all posts
module.exports.getAllPosts = function (callback) {
    pool.query('SELECT * FROM `postStructure`', callback);
}


//filter posts by category
module.exports.findByCategory = function(category, callback) {
	pool.query("SELECT * FROM `postStructure` WHERE category = ?", [category], callback);
}

//filter categories of posts
module.exports.getAllCategories = function(callback) {
	pool.query("SELECT `category` FROM `postStructure`", callback);
}




