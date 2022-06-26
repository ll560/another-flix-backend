const express = require('express')
const router = express.Router()
const usersCtrl = require('../../controllers/api/users')


//POST - create /api/v1/users
router.post('/', usersCtrl.create)

//POST - login /api/v1/users/login
router.post('/login', usersCtrl.login)

//the below routes show not be accessible to unauthorized users
// //GET - show /api/v1/users/:id
router.get('/:id', usersCtrl.show)

//GET /api/v1/users/:id/favorites
router.get('/:id/favorites', usersCtrl.getFavorites)

//PUT - update 
router.put('/:id', usersCtrl.update)

module.exports = router


