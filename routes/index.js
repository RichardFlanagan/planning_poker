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
			'cards': [1,2,3,4],
			'usernames': usernames
		};
		res.render('poker.pug', context);

	});

});


module.exports = routes;
