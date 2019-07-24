
var mongoose = require('mongoose');
var auth = require('./auth.json');
var Schema = mongoose.Schema;
mongoose.connect(auth.MongoToken, {useNewUrlParser: true});
const db = mongoose.connect;

var UserSchema = Schema({
  username: String,
  password: String
});

var EventSchema = Schema({
  title: String,
  description: String,
  notes: String,
  document: String
});

var BillSchema = Schema({
  type: String,
  title: String,
  date: String,
  total: Number
});

var VisitsSchema = Schema ({
  data: String
});




//mongoose models used to interface with the database
var userModel = mongoose.model('Users', UserSchema);
var eventModel = mongoose.model('Events', EventSchema);
var billModel = mongoose.model('Bills', BillSchema);
var visitsModel = mongoose.model('Visits', VisitsSchema);


exports.user = userModel;
exports.event = eventModel;
exports.bill = billModel;
exports.visits = visitsModel;



exports.db = db;
