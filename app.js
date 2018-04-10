const express = require('express');
const http = require('http');
const mysql = require('mysql');

const app = express();
const server = http.createServer(app);

//create connection
const db = mysql.createConnection({
    host        :   'localhost',
    user        :   'root',
    password    :   '',
    database    :   'im_home'
});

//connect
db.connect((err) => {
    if(err){
        throw err;
    }
    console.log('Mysql Connected...')
})



// Add headers
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

bodyParser = require('body-parser');

// parse application/json
app.use(bodyParser.json());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse the raw data
app.use(bodyParser.raw());
// parse text
app.use(bodyParser.text());

app.post('/endpoint', function(req, res){
	var obj = {};
	console.log(req.body.title + ' ' + req.body.message);
	res.send(req.body);
});

app.listen('3000', () => {
    console.log('Server started on port 3000')
})

