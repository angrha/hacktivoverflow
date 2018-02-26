const express = require('express');
const router  = express.Router();
const Answer = require('../controllers/answerController')
const isLogin = require('../helper/authentication')


// router.get('/', Answer.findAll)
// router.get('/:id', Answer.detail)
// router.post('/',isLogin, Answer.create)
// router.put('/:id', isLogin, Answer.update)
// router.delete('/:id', isLogin, Answer.delete)

module.exports = router