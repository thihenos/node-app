module.exports = function (app) {

	/* Rota para material */
	const material = require('./services/material')
	app.post('/api/material', material.createDoc)
	app.get('/api/material/:id', material.getOneDoc)
	app.get('/api/material/', material.getAllDocs)
	app.post('/api/material/:id', material.updateDoc)
	app.delete('/api/material/:id', material.deleteDoc)
	/* fim para rota material */

  //Se a pessoa tentar colocar qualquer endereço que não tenha na aplicação, será direcionada para welcome/index
  app.route('/*').get((req, res) => {
    res.status(401).send({ message: 'Pagina não existe!' }); 
  });

};