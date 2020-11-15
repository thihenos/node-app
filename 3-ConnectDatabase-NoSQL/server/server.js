const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const flash = require('connect-flash')
const cons = require('consolidate')
const dust = require('dustjs-helpers')
const dustlinkedin = require('dustjs-linkedin')
const cookieParser = require('cookie-parser')
const app = express()
const server = require('http').createServer(app)
const port = process.env.PORT || 5000

  // Sinalizando ao Node a view engine
  app.engine('dust',cons.dust)
  
  // Body Parser Middleware, usado para envio das informações do front para o back
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({extended : true}))

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

  // Subindo server em porta desejada
  app.listen(port, () => {
	 console.log('----------- APP INICIADA -----------')
  })
