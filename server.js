var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var session = require('express-session');
var massive = require('massive');
var port = 8008;
var cors = require('cors');
var corsOptions = {
    origin: 'http://localhost:8008'
};

var secret = require('./config.js');

var app = module.exports = express();
app.use(bodyParser.json());
app.use(cors(corsOptions));
app.use(session({
	secret: secret.secret
}));

app.use(express.static(__dirname + '/public'));

// var massiveInstance = massive.connectSync({connectionString : connectionString});
// app.set('db', massiveInstance);
// var db = app.get('db');


// var controller = require('./controller');


app.listen(port, function(){
	console.log('Listening on ' + port)
});
