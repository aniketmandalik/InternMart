var express = require('express');
var app = express();
var port = process.env.PORT || 8000;
var morgan = require('morgan');
var mongoose = require('mongoose');
var bodyParser = require("body-parser");

var User = require('./app/models/user');

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
	var userDetails = new User();
	var user = req.body;
	userDetails.name = user.name;
	userDetails.username = user.username;
	userDetails.email = user.email;
	userDetails.password = user.password;
	if (user.username == null || user.email == null || user.password == null ||
		 user.username == '' || user.username == '' || user.username == '') {
		res.send("Double check that name, username, email, and password are provided");
	}else {
		userDetails.save(function(err) {
			if (err) {
				res.send(err);
				// res.send("Username or email already exists!");
			} else {
				res.send("User Created!")
			}
		});
	}
});

app.get('/home', function(req, res){
	res.send("Hello from home.");
});

app.listen(port, function() {
	console.log("Running the server on port " + port);
});


