const mysql = require('mysql');

var pool = mysql.createPool({
    connectionLimit: 20,
    multipleStatements: true,
    host: '194.88.219.69',
    user: 'business-times',
    password: 'jDavd3wwSE4DtwHt',
    database: 'business-times'
});



//get all posts
module.exports.getAllPosts = function (callback) {
    pool.query('SELECT * FROM `postStructure`', callback);
}


//filter posts by category
module.exports.findByCategory = function (category, callback) {
    pool.query("SELECT * FROM `postStructure` WHERE category = ?", [category], callback);
}

//filter posts by category and id
module.exports.findById = function ( id, callback) {
    pool.query("SELECT * FROM `postStructure` WHERE id = ?", [id], callback);

}


//filter categories of posts
module.exports.getAllCategories = function (callback) {
    pool.query("SELECT `category` FROM `postStructure`", callback);
}



module.exports.updatePost = function (data, id, callback) {
    // console.log("dataid is " + id);
    pool.query("UPDATE `postStructure` set title=?, content=?, date=?, tags=?  where id=?", [data.title, data.content, data.date, data.tags, id], callback);

    // connection.query('UPDATE `employee` SET `employee_name`=?,`employee_salary`=?,`employee_age`=? where `id`=?', [req.body.employee_name, req.body.employee_salary, req.body.employee_age, req.body.id], function (error, results, fields) {
    //         if (error) throw error;
    //         res.end(JSON.stringify(results));
    //     });
}

module.exports.addPost = function (data, callback) {
    // console.log("dataid is " + id);
    var newPost = { title: data.title, content: "djhgfnhgfn", date: data.date, tags: data.tags};

    pool.query("INSERT into `postStructure` set ?", newPost, callback);

    // console.log('Last post insert id:', res.insertId);
}



module.exports.deletePost = function (id, callback) {
    pool.query("DELETE FROM `postStructure` WHERE id = ?", [id], callback);
}



// var newPost = { title: "xfgzdfgdxfg", content: "djhgfnhgfn", date: 112341, tags: "me me me me"};


// pool.query("DELETE FROM `postStructure` WHERE id = ?", [17], function (error, results, fields) {
//             if (error) throw error;
//             // console.log('Last post insert id:', res.insertId);
//         });







