var express = require('express');
var app = express();
var port = process.env.PORT || 8000;
var morgan = require('morgan');
var mongoose = require('mongoose');
var User = require('./app/models/user');
var bodyParser = require("body-parser")

// app.get('/', function(req, res) {
// 	res.send("Hello World!");
// });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(morgan('dev'));

mongoose.connect('mongodb://localhost:27017/internmart', function(err) {
	if (err) {
		console.log("Not connected to the database! " + err);
	} else {
		console.log("Successfully connected to MongoDB!");
	}
});


//http://localhost:8000/users
app.post('/users', function(req, res) {
	// res.send("Testing users route.");
	var user = new User();
	user.name = req.body.name;
	user.email = req.body.email;
	user.username = req.body.username;
	user.password = req.body.password;
	user.save();
	res.send("Yeee User Created!");
});

app.get('/home', function(req, res){
	res.send("Hello from home.");
});

app.listen(port, function() {
	console.log("Running the server on port " + port);
});


