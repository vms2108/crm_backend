const express = require('express')
const controller = require('../controllers/position')
const router = express.Router()

router.post('/', controller.create)
router.get('/:categoryId', controller.getByCategoryId)
router.delete('/:id', controller.remove)
router.patch('/:id', controller.update)

module.exports = router