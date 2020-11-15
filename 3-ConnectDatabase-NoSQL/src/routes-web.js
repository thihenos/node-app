module.exports = function (app) {

	/* Rota para material */
	const material = require('./services/material')
	app.post('/api/material', material.createDoc)
	/* fim para rota material */

};