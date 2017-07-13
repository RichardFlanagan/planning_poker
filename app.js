const express = require('express');
const app = express();
const http = require('http').Server(app);
const path = require('path');
const io = require('socket.io')(http);
const routes = require('./routes');

const mongoose = require('mongoose');
const User = require('./models/user')
const PokerRoom = require('./models/poker_room')

mongoose.connect('mongodb://localhost/poker');
app.set('db', mongoose);

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, '/public')));
app.use('/', routes);

app.locals.site_name = 'planning_poker';


io.on('connection', function(socket){

	console.log('a user connected');

	socket.on('disconnect', function(){
		console.log('user disconnected');
	});

	socket.on('user_joined', function(username){
		console.log('user_joined broadcast');
	});

});


http.listen(3000, function(){
	console.log('listening on *:3000');
});

/*

front page
- shows information on how to play
- links to creating a new room


user id middleware
1. check if the user has an id
2. if not, assign a new, unique id
3. save id to database
4. save id as cookie

connect to front page
1. user connects
2. execute user id middleware
3. do nothing

connect to create room
1. user connects
2. execute user id middleware
3. allow user to 

connect to poker room
1. user connects
2. execute user id middleware
3. play poker

*/
