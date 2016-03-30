// set up ======================================================================
var http			= require('http');
var express			= require('express');
var app				= express();								// create our app w/ express
var port			= process.env.PORT || 8000;					// set the port
var server = http.Server(app);
var morgan			= require('morgan');
var bodyParser		= require('body-parser');
var methodOverride	= require('method-override');
var io = require('socket.io')(server);

//SOCKET LOVE & CHAT=============================================================

// usernames which are currently connected to the chat
  var usernames = {};
  var numUsers = 0;
  
io.on('connection', function (socket) {
var addedUser = false;

// when the client emits 'new message', this listens and executes
socket.on('new message', function (data) {
// we tell the client to execute 'new message'
socket.broadcast.emit('new message', {
username: socket.username,
message: data,
timestamp: Date.now()
});
console.log('I sent it');
});
  
// when the client emits 'add user', this listens and executes
socket.on('add user', function (username) {
// we store the username in the socket session for this client
socket.username = username;
// add the client's username to the global list
usernames[username] = username;
++numUsers;
addedUser = true;
socket.emit('login', {
numUsers: numUsers
});
// echo globally (all clients) that a person has connected
socket.broadcast.emit('user joined', {
username: socket.username,
numUsers: numUsers
});
});

// when the client emits 'typing', we broadcast it to others
socket.on('typing', function () {
socket.broadcast.emit('typing', {
username: socket.username
});
});

// when the client emits 'stop typing', we broadcast it to others
socket.on('stop typing', function () {
socket.broadcast.emit('stop typing', {
username: socket.username
});
});

// when the user disconnects.. perform this
socket.on('disconnect', function () {
// remove the username from global usernames list
if (addedUser) {
delete usernames[socket.username];
--numUsers;

// echo globally that this client has left
socket.broadcast.emit('user left', {
username: socket.username,
numUsers: numUsers
});
}
});
});
  
// configuration ===============================================================
app.use(express.static(__dirname + '/public'));					// set the static files location /public/img will be /img for users
app.get('/', function(req, res){
  res.sendFile(__dirname + '/public/views/test.html');
});
app.use(morgan('dev'));											// log every request to the console
app.use(bodyParser.urlencoded({limit: '5mb','extended':'true'}));  // parse application/x-www-form-urlencoded
app.use(bodyParser.json({limit: '5mb'}));                            // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(methodOverride('X-HTTP-Method-Override'));				// override with the X-HTTP-Method-Override header in the request
// Mongoose ====================================================================
require('./config/database');
// Serveur ===================================================================

// routes ======================================================================
require('./app/routes')(app);
process.on('SIGINT', function() {
  console.log('Stopping...');
  process.exit();
});
// listen (start app with node server.js) ======================================
server.listen(port);
console.log('App listening on port ' + port);
	
