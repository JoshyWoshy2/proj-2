const express = require('express')
const router = express.Router()
const postsCtrl = require('../controllers/posts')

router.get('/', postsCtrl.index)
// router.get('/new', postsCtrl.new)

module.exports = router