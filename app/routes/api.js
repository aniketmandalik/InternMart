var User = require("../models/user");

module.exports = function(router){

	//http://localhost:8000/users
	router.post('/users', function(req, res) {

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

	

	return router;
}