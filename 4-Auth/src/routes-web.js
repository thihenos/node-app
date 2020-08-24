'use strict';

module.exports = function (app) {

	const jwt = require('../server/utils/functions/jwt')

	/* Route for login */
	  const login = require('./services/login')
	  app.post('/api/login/auth', login.validateUser)
	  //app.post('/api/login/new-password', login.newPassword)
	  //app.post('/api/login/validateToken', login.validateToken)
	  //app.post('/api/login/resquestToken', login.resetPassword)
	  //app.get('api/logout',login.destroySession)
	/* End route for login */

	/* Route for user */
	  const user = require('./services/user')
	  app.post('/api/user/', user.createDoc)
	  //app.post('/api/login/new-password', login.newPassword)
	  //app.post('/api/login/validateToken', login.validateToken)
	  //app.post('/api/login/resquestToken', login.resetPassword)
	  //app.get('api/logout',login.destroySession)
	/* End route for user */

	/* Route for list */
	  const list = require('./services/list')
	  app.get('/api/list/show', jwt.verifyToken, list.createDoc)
	  //app.post('/api/list/new',list.createDoc)
	  //app.get('/api/usuario/:id', usuario.getOneDoc)
	  //app.post('/api/usuario/edit/:id',usuario.updateDoc)
	  //app.post('/api/usuario/reset_pass/:id',usuario.resetPassword)
	  //app.post('/api/usuario/change_pass/:id',usuario.changePassword, function(req, res){
	  //  res.redirect('/login')
	  //})
	  //app.delete('/api/usuario/:id',usuario.destroyDoc, function(req, res){
	  //  res.redirect('/usuario')
	  //\})
	/* End route for list */

	/* If the user tries to access any address of the app which not exists in routes.js file, 
	 * it will be send to the show page, which will return all data saved
	 */
	app.route('/*').get(function (req, res) {
		res.status(401).send({message : 'Eita! Rota não existente, você não está autorizado!'});
 	});

};