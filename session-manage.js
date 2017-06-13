module.exports = function (app) {
    var mysql = require('mysql'),
        session = require('express-session'),
        MySQLStore = require('express-mysql-session')(session),
        md5 = require('md5'),
        bodyParser = require('body-parser'),
        User = require('./models/user'),
        Post = require('./models/post'),
        crypto = require('crypto');

    var options = {
        host: '194.88.219.69',
        user: 'business-times',
        password: 'jDavd3wwSE4DtwHt',
        database: 'business-times'
    };

    var sessionStore = new MySQLStore(options);

    app.use(session({
        secret: 'ssshhhhh',
        key: 'session_cookie_name',
        store: sessionStore,
        resave: true,
        saveUninitialized: true
    })
    );

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));

    app.set('views', __dirname + '/views');
    app.set('view engine', 'ejs');
    app.engine('html', require('ejs').renderFile);

    console.log('User', User);
    console.log('Post', Post);

    var sess;
    app.get('/', function (req, res) {
        sess = req.session;

        console.log('sess', sess);

        //check if session exists
        if (sess.userData) {
            res.redirect('/admin');
        } else {
            res.render('index.html');
        }
    });

    app.post('/login', function (req, res) {
        sess = req.session;

        User.findByEmail(req.body.email, function (error, results, fields) {

            loginHashedPass = crypto.createHash('md5').update(req.body.password).digest('hex');
            existingHashedPass = results[0].password;

            if (results.length && existingHashedPass === loginHashedPass) {
                sess.userData = {
                    id: results[0].id,
                    email: results[0].email,
                    name: results[0].name
                };
            }

            res.end('done');
        });
    });

    app.get('/admin', function (req, res) {
        sess = req.session;

        console.log('sess', sess);

        if (sess.userData) {
            //Here will be redirect to ADMIN HOME PAGE (after build)
            res.write('<h1> Hello ' + sess.userData.email + '</h1>');
            res.end('<a href="/logout">Logout</a>');
        } else {
            res.redirect('/');
        }
    });



    //Posts ----------> routes/posts.js


    //path to CRUD all posts, admin mode
    app.get('/admin/posts', function (req, res) {
        sess = req.session;

        console.log('sess.userData', sess.userData);

        if (!sess.userData) {
            sess.userData = {
                id: 2,
                email: 'nd@binotel.ua',
                name: 'nd'
            };
        }

        if (sess.userData) {
            //get all posts when user checked
            Post.getAllPosts(function (err, rows, fields) {
                if (err) throw err;
                return res.json(rows);
            })

        } else {
            res.redirect('/');
        }
    });



    //get posts by id, admin mode
    app.get('/admin/posts/any/:id', function (req, res) {
        sess = req.session;

        if (!sess.userData) {
            sess.userData = {
                id: 2,
                email: 'nd@binotel.ua',
                name: 'nd'
            };
        }

        if (sess.userData) {

            Post.findById(req.params.id, function (err, rows, fields) {
                searchedId = req.params.id * 1;
                existingId = rows[0].id;
                console.log(existingId);

                if (rows.length) {
                    //  res.json(rows[0].tags);
                    return res.json(rows);
                } else
                    return;
            })

        } else {
            res.redirect('/');
        }
    });


    //get posts by category, admin mode
    app.get('/admin/posts/:category', function (req, res) {
        sess = req.session;

        if (!sess.userData) {
            sess.userData = {
                id: 2,
                email: 'nd@binotel.ua',
                name: 'nd'
            };
        }

        if (sess.userData) {
            //get all posts when user checked
            Post.findByCategory(req.params.category, function (err, rows, fields) {
                searchedCategory = req.params.category;
                existingCategory = rows[0].category;

                if (rows.length && existingCategory === searchedCategory) {
                    //  res.json(rows[0].tags);
                    return res.json(rows);
                } else
                    return;
            })

        } else {
            res.redirect('/');
        }
    });




    //get all posts categories
    app.get('/admin/post_categories', function (req, res) {
        sess = req.session;

        if (!sess.userData) {
            sess.userData = {
                id: 2,
                email: 'nd@binotel.ua',
                name: 'nd'
            };
        }

        if (sess.userData) {

            Post.getAllCategories(function (err, rows, fields) {
                if (err) throw err;
                return res.json(rows);
            })

        } else {
            res.redirect('/');
        }
    });


    //update post
    app.put('/admin/posts/any/:id', function (req, res) {
        sess = req.session;

        if (!sess.userData) {
            sess.userData = {
                id: 2,
                email: 'nd@binotel.ua',
                name: 'nd'
            };
        }

        if (sess.userData) {
            data = req.body;

            Post.updatePost(data, req.params.id,  function (err, rows, fields) {
                if (err) throw err;
                return res.json(rows);
            })
        } else {
            res.redirect('/');
        }

    });


    //add post
    app.post('/admin/addpost', function (req, res) {
        sess = req.session;

        if (!sess.userData) {
            sess.userData = {
                id: 2,
                email: 'nd@binotel.ua',
                name: 'nd'
            };
        }

        if (sess.userData) {
            data = req.body;

            Post.addPost(data, function (err, rows, fields) {
                if (err) throw err;
                return res.json(rows);
            })
        } else {
            res.redirect('/');
        }

    });


     //delete post
    app.delete('/admin/posts/any/:id', function (req, res) {
        sess = req.session;

        if (!sess.userData) {
            sess.userData = {
                id: 2,
                email: 'nd@binotel.ua',
                name: 'nd'
            };
        }

        if (sess.userData) {
            // data = req.body;

            Post.deletePost(req.params.id, function (err, rows, fields) {
                if (err) throw err;
                return res.json(rows);
            })
        } else {
            res.redirect('/');
        }

    });




    //logout
    app.get('/logout', function (req, res) {
        req.session.destroy(function (err) {
            if (err) {
                console.log(err);
            } else {
                res.redirect('/');
            }
        });
    });
}


