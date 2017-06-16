const express = require('express'),
      path = require('path'),
      bodyParser = require('body-parser'),
      cors = require('cors'),
      sassMiddleware = require('node-sass-middleware'),
      expressLayouts = require('express-ejs-layouts');


const app = express();
const users = require('./routes/users');
const port = 3000;

const User = require('./models/user');
app.use('/users', users);

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(expressLayouts);
app.engine('html', require('ejs').renderFile);


// sass middleware, compiles page
app.use(require('node-sass-middleware')({
  src: path.join(__dirname, '/sass'),
  dest: path.join(__dirname, '/public/stylesheets'),
  prefix:  '/stylesheets',
  sourceMap: true,
  outputStyle: 'compressed'
})); 



// static, serves page
app.use(express.static(path.join(__dirname, 'public')));

//session and coockies
require('./session-manage')(app);

//Routes

// app.get('/', (req, res) => {
//     res.send('Invalid Endpoint');
// });

// app.get('*', (req, res) => {
//     res.redirect('/');
// });

app.listen(port, () => {
    console.log('Server started on port ' + port);
});