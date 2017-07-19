var express = require('express');
var app = express();
var port = process.env.PORT || 8080;
var morgan = require('morgan');
var mongoose = require('mongoose');

// app.get('/', function(req, res) {
// 	res.send("Hello World!");
// });

app.use(morgan('dev'));
mongoose.connect('mongodb://localhost:27017/internmart', function(err) {
	if (err) {
		console.log("Not connected to the database! " + err);
	} else {
		console.log("Successfully connected to MongoDB");
	}
});

app.get('/home', function(req, res){
	res.send("Hello from home.");
});

app.listen(port, function() {
	console.log("Running the server on port " + port);
});


