const express = require('express')
const cookieSession = require('cookie-session')
const path = require('path')
const flash = require('connect-flash')
const bodyParser = require('body-parser')
const cons = require('consolidate')
const dust = require('dustjs-helpers')
const dustlinkedin = require('dustjs-linkedin')
const cookieParser = require('cookie-parser')
//const passport = require('passport')
//const passportConfig = require('./utils/config/passport')
const app = express()
const logger = require('./logger')

const server = require('http').createServer(app)

const logStart = () => {
  logger.info('Server logger.info = enabled', { scope: 'Initserver' })
  logger.debug('Server logger.debug = enabled', { scope: 'Initserver' })
  logger.warn('Server logger.warn = enabled', { scope: 'Initserver' })
  logger.error('Server logger.error = enabled', { scope: 'Initserver' })
}

const createServer = () => {
  // Sinalizando ao Node a view engine
  app.engine('dust',cons.dust)
  app.use(flash())
  //Usando senha no cookie
  app.use(cookieParser('app'))

  // Body Parser Middleware, usado para envio das informações do front para o back
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({extended : true}))

  // Configuração de Sessão do Express
  app.use(
    cookieSession({name:'app-web', keys: ['app'], maxAge: 3600000})
  )

  /* Configurando a engine que será responsável por compilar o front-end */
  // Configurando a engine dust para compilar nossos arquivos que estarão na pasta views com extensão .dust
  app.set('view engine', 'dust','dustjs-linkedin');
  // Configurando qual pasta será a visualização
  app.set('views',path.resolve(__dirname , '../views/'));
  /* Fim de configuração de engine */

  /* Configuração de pastas fixas e estáticas na aplicação */
  app.use(express.static(path.resolve(__dirname , '../public/')))
  /* */

  /* Configuração passport */
  //  app.use(passport.initialize());
  //  app.use(passport.session());
  //  passportConfig(passport);
  /* Fim configuração passport */

  //Iniciando Mongo
  let db = require('./models');

  //require('../src/mobileRoutes')(app)
  require('../views/routes-views')(app)
  require('../src/routes-web')(app)

  logStart()
  return app
}

module.exports = {
  app: createServer(),
  server
}
