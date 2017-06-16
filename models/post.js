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
    pool.query('SELECT * FROM `postStructure` ORDER BY id DESC', callback);
}


//filter posts by category
module.exports.findByCategory = function (category, callback) {
    pool.query("SELECT * FROM `postStructure` WHERE category = ?", [category], callback);
}

//filter posts by category and id
module.exports.findById = function ( id, callback) {
    pool.query("SELECT * FROM `postStructure` WHERE id = ?", [id], callback);

}


//get categories of posts
module.exports.getAllCategories = function (callback) {
    pool.query("SELECT `category` FROM `postStructure`", callback);
}



module.exports.updatePost = function (data, id, callback) {
    // console.log("dataid is " + id);
    pool.query("UPDATE `postStructure` set title=?, content=?, shortContent=?, date=?, tags=?, category=?  where id=?", [data.title, data.content, data.shortContent, data.date, data.tags, data.category, id], callback);

    // connection.query('UPDATE `employee` SET `employee_name`=?,`employee_salary`=?,`employee_age`=? where `id`=?', [req.body.employee_name, req.body.employee_salary, req.body.employee_age, req.body.id], function (error, results, fields) {
    //         if (error) throw error;
    //         res.end(JSON.stringify(results));
    //     });
}

module.exports.addPost = function (data, callback) {
    // console.log("dataid is " + id);
    var newPost = { title: data.title, content: data.content, shortContent: data.shortContent, date: data.date, tags: data.tags, category: data.category};

    pool.query("INSERT into `postStructure` set ?", newPost, callback);

    // console.log('Last post insert id:', res.insertId);
}



module.exports.deletePost = function (id, callback) {
    pool.query("DELETE FROM `postStructure` WHERE id = ?", [id], callback);
}




// pool.query("DELETE FROM `postStructure` WHERE id = ?", [17], function (error, results, fields) {
//             if (error) throw error;
//             // console.log('Last post insert id:', res.insertId);
//         });







