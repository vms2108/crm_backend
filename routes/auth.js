const express = require('express')
const bodyParser = require('body-parser').json()
const controller = require('../controllers/auth')
const router = express.Router()

router.post('/login', controller.login)
router.post('/register', controller.register)

module.exports = router