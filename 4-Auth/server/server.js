const createServer = require('./create-server')
const logger = require('./logger')

const app = createServer.app

const port = process.env.PORT || 3000
/* Condiguração de porta express */
// Subindo server em porta desejada
const express_server = app.listen(port, () => {
  logger.info(`Server listening on port ${port}`, { scope: 'Initserver' })
})
/* Fim Chamada das rotas REST da aplicação */

module.exports = {
  express_server
}
