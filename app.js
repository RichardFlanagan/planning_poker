const express = require('express');
const app = express();
const http = require('http').Server(app);
const path = require('path');
const routes = require('./routes');


app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, '/public')));
app.use('/', routes);


app.locals.site_name = 'planning_poker';


http.listen(3000, function(){
	console.log('listening on *:3000');
});