const mongoose = require('mongoose')
const Schema = mongoose.Schema;

var user_schema = new Schema({
	name: String
});

var User = mongoose.model('User', user_schema);

module.exports = User;
