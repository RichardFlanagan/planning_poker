const routes = require('express').Router();

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
	var context = {
		'cards': [1,2,3,4]
	};
	res.render('poker.pug', context);
});


module.exports = routes;
