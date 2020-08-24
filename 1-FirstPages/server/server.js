const createServer = require('./create-server')
const app = createServer.app

const port = process.env.PORT || 4000

// Subindo server em porta desejada
const express_server = app.listen(port, () => {
	console.log('----------- APP INICIADA -----------')
})
/* Fim Chamada das rotas REST da aplicação */

module.exports = {
  express_server
}
