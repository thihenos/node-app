const express = require('express')
const path = require('path')

const app = express()
const server = require('http').createServer(app)
const port = process.env.PORT || 4100

  // Subindo server em porta desejada
	app.listen(port, () => {
		console.log(`----------- APP INICIADA NA PORTA ${port} -----------`)
	})
