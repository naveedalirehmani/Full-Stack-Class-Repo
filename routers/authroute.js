const { Router } = require('express')
const { login, postmethod } = require('../controller/authcontroll')
const Route = Router()

Route.post('/sinup', postmethod)
Route.get('/login', login)

module.exports = Route