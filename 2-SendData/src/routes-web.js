module.exports = function (app) {

	/* Rota para material */
	  	const material = require('./services/material')
	  	app.post('/api/material', material.createDoc)
	/* fim para rota material */
	
	/* Rota para test */
		const test = require('./services/test')
		app.post('/api/test', test.returnJson)
  	/* fim para rota test */

};