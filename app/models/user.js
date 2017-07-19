var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  name: String,
  email: String,
  username: {type: String, noWeirdChars: true, required: true, unique: true},
  password: {type: String, complex: true, required: true, unique: true}
  // interests: {type: "array", interest: String},
  // skills: {type: "array", skills: String},
  // experience: Number
});

module.exports = mongoose.model('User', UserSchema)