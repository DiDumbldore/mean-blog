module.exports = function (app) {
    const mysql = require('mysql');
    var session = require('express-session');
    var MySQLStore = require('express-mysql-session')(session);
    var md5 = require('md5');
    const bodyParser = require('body-parser');
    const User = require('./models/user');
    var crypto = require('crypto');
    
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
    app.use(bodyParser.urlencoded({ extended: true }));

    app.set('views', __dirname + '/views');
    app.set('view engine', 'ejs');
    app.engine('html', require('ejs').renderFile);

    console.log('User', User);

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

            if (results.length &&  existingHashedPass === loginHashedPass) {
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
            //Here will be redirect to ADMIN HOME PAGE
            res.write('<h1> Hello ' + sess.userData.email + '</h1>');
            res.end('<a href="/logout">Logout</a>');
        } else {
            res.redirect('/');
        }
    });

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