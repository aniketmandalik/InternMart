var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt-nodejs')

var UserSchema = new Schema({
  name: String,
  email: String,
  username: {type: String, noWeirdChars: true, required: true, unique: true},
  password: {type: String, complex: true, required: true, unique: true}
  // interests: {type: "array", interest: String},
  // skills: {type: "array", skills: String},
  // experience: Number
});

UserSchema.pre("save", function(next) {
	var user = this;
	bcrypt.hash(user.password, null, null, function(err, hash) {
		if (err) return next(err);
		user.password = hash;
		next();
	});
});

module.exports = mongoose.model('User', UserSchema)