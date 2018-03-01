const express = require('express');
const router  = express.Router();
const Question = require('../controllers/questionController')
const isLogin = require('../helper/authentication')

router.get('/', Question.findAll)
router.get('/:id', Question.detail)
router.post('/',isLogin, Question.create)
router.put('/:id', isLogin, Question.update)
router.delete('/:id', isLogin, Question.delete)
// insert answer in routing question
router.put('/:id/answer', isLogin, Question.insertAnswer)
router.put('/:id/votes', isLogin, Question.vote)
router.get('/:id/votes', Question.getVotes)

module.exports = router