var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var JobSchema = new Schema({
  title:  String,
  company: [{name: String, phoneNumber: String, email: String, location: String}],
  duration: [{startDate: Date, endDate: Date, length: int, fullTime: boolean}],
  pay: [{costsMoney: boolean, stipend: boolean, pay: double}],
  requirements: [{skills: String[], experience: double, }]
  field: String[],
  outOfState: boolean,
  premium: boolean
});

module.exports = mongoose.model('Job', JobSchema)