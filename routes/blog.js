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


    //authorization
    require('../session-manage')(app);


   
}