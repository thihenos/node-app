'use strict';

module.exports = function (app) {

	/* Rota para material */
	  const material = require('./services/material')
	  app.post('/api/material', material.createDoc)
	/* fim para rota material */

	/* If the user tries to access any address of the app which not exists in routes.js file, 
	 * it will be send to the show page, which will return all data saved
	 */
	app.route('/*').get(function (req, res) {
		res.status(401).send({message : 'Eita! Rota não existente, você não está autorizado!'});
 	});

};