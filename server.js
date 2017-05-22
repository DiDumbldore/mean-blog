const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');


const app = express();
const users = require('./routes/users');
const port = 3000;

const User = require('./models/user');
app.use('/users', users);

// app.use(cors());


//Set static folder 
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