const express = require('express');
const app = express();
const http = require('http').Server(app);
const path = require('path');

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, '/public')));

app.locals.site_name = 'planning_poker';


app.use(function(req, res, next){
	console.log('request');
	next();
});

app.get('/', function(req, res){
	res.render('homepage.pug');
});

app.get('/poker', function(req, res){
	var context = {
		'cards': [1,2,3]
	};
	res.render('poker.pug', context);
});

http.listen(3000, function(){
	console.log('listening on *:3000');
});