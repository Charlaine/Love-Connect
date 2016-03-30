// ROUTES TODOS
var User = require('../models/user.js');
module.exports 	= function(app) {
	app.get('/todos', User.findAll);
	app.post('/todos', User.create);
	app.put('/todos/:id', User.update);
	app.delete('/todos/:id', User.delete);
    
}

