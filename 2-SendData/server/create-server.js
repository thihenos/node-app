const express = require('express')
const cookieSession = require('cookie-session')
const path = require('path')
const flash = require('connect-flash')
const bodyParser = require('body-parser')
const cons = require('consolidate')
const dust = require('dustjs-helpers')
const dustlinkedin = require('dustjs-linkedin')
const cookieParser = require('cookie-parser')
const app = express()
const server = require('http').createServer(app)

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

  require('../views/routes-views')(app)
  require('../src/routes-web')(app)

  return app
}

module.exports = {
  app: createServer(),
  server
}
