const mongoose = require('mongoose')
const Schema = mongoose.Schema;

var poker_room_schema = new Schema({
	name: String
});

var PokerRoom = mongoose.model('PokerRoom', poker_room_schema);

module.exports = PokerRoom;
