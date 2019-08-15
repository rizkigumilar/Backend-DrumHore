const express = require('express')
const Route = express.Router()

const User = require('../controllers/users')
const Auth = require('../helpers/auth')


Route
    .get('/user', User.getUsers)
    .post('/user/register', Auth.authInfo, User.register)
    .post('/user/login', Auth.authInfo, User.login)


module.exports = Route