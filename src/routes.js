const { Router } = require('express')

const UserController = require('./controllers/UserController')
const routes = Router()

routes.get('/api/users', UserController.index)
routes.get('/api/users/:id', UserController.show)
routes.post('/api/users', UserController.store)

module.exports = routes