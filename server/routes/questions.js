const express = require('express');
const router  = express.Router();
const Question = require('../controllers/questionController')
const isLogin = require('../helper/authentication')

router.get('/', Question.findAll)
router.get('/:id', Question.detail)
router.post('/',isLogin, Question.create)
router.put('/:id', isLogin, Question.update)
router.delete('/:id', isLogin, Question.delete)
router.put('/:id/answer', isLogin, Question.insertAnswer)

module.exports = router