const routes = require('express').Router();
const mongoose = require('mongoose');

// Basic middleware
routes.use(function(req, res, next){
	console.log('request');
	next();
});


// Homepage
routes.get('/', function(req, res){
	res.render('homepage.pug');
});


// Poker page
routes.get('/poker', function(req, res){
	var db = req.app.get('db');
	var User = db.model('User');

	User.find({}, function(err, users) {

		var usernames = [];
		for (i in users){
			usernames.push(users[i]['name']);
		}

		var context = {
			'room_name': 'room',
			'cards': [1,2,3,4],
			'usernames': usernames
		};
		res.render('poker_room.pug', context);

	});

});


// Poker page
routes.get('/poker/:room_id', function(req, res){
	var db = req.app.get('db');
	var PokerRoom = db.model('PokerRoom');
	var User = db.model('User');

	console.log(req.params.room_id);

	PokerRoom.findOne({'_id':req.params.room_id}, function(err, room) {

		console.log(room);

		if (room != null){
			var context = {
				'room_name': room.name,
				'cards': [1,2,3,4,5,'Pass'],
				'usernames': []
			};
			res.render('poker_room.pug', context);
		} else {
			res.send('room not found');
		}

		

	});

});




module.exports = routes;
