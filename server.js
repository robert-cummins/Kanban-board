const express = require('express')
const hbs = require('express-handlebars')
const routes = require('./routes/routes.js')
const server = express()


//Middleware
server.engine('hbs', hbs({
    extname: 'hbs',
    defaultLayout: 'main'
}))
server.set('view engine', 'hbs')
server.use(express.static('public'))
server.use(express.urlencoded({extended: true}))


server.use('/', routes)

module.exports = server