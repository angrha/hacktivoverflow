const Question = require('../models/Question')
const Answer = require('../models/Answer')

class QuestionController {
  // find all questions
  static findAll(req, res) {
    Question.find()
      .populate('author')
      .then(questions => {
        res.status(200).json({
          message: 'list all questions',
          questions: questions
        })
      })
      .catch(err => {
        console.log(err)
        res.status(500).send(err)
      })
  }

  // find one question
  static detail(req, res) {
    Question.findById(req.params.id)
      .populate('author', 'username')
      .populate('answers')
      .then(question => {
        res.status(200).json({
          message: 'detail question',
          question: question
        })
      })
      .catch(err => {
        console.log(err)
        res.status(500).send(err)
      })
  }

  // create question, middleware on
  static create(req, res) {
    let objQuestion = {
      author: req.decoded.id,
      title: req.body.title,
      desc: req.body.desc
    }
    let question = new Question(objQuestion)
    question.save()
      .then(questionResult => {
        res.status(200).json({
          message: 'success insert question',
          question: questionResult
        })
      })
      .catch(err => {
        console.log(err)
        res.status(500).send(err)
      })
  }

  // update question
  static update(req, res) {
    Question.findOne({
      _id: req.params.id,
      author: req.decoded.id
    })
      .then(question => {
        question.title = req.body.title || question.title
        question.desc = req.body.desc || question.desc

        question.save()
          .then(updatedQuestion => {
            res.status(200).json({
              message: 'success update question',
              question: question
            })
          })
          .catch(err => {
            console.log(err)
            res.status(500).send(err)
          })
      })
      .catch(err => {
        console.log(err)
        res.status(500).send(err)
      })
  }

  // delete question
  static delete(req, res) {
    Question.findOneAndRemove({
      _id: req.params.id,
      author: req.decoded.id
    })
    .then(question => {
      res.status(200).json({
        message : 'question deleted',
        question : question
      })
    })
    .catch(err => {
      console.log(err)
      res.status(500).send(err)
    })
  }

  // insert answer with put question
  static insertAnswer(req, res) {
    Question.findById(req.params.id)
      .then(question => {
        // call and post asnwer
        let answer = new Answer({
          author: req.decoded.id,
          answer: req.body.answer
        })
        answer.save()
          .then(answerResult => {
            question.answers.push(answerResult._id)
            question.save()
              .then(insertedAnswer => {
                res.status(200).json({
                  message: 'success insert answer',
                  question: insertedAnswer
                })
              })
              .catch(err => {
                console.log(err)
                res.send(err)
              })
          })
          .catch(err => {
            console.log(err)
            res.send(err)
          })
      })
      .catch(err => {
        console.log(err)
        res.send(err)
      })
  }
}

module.exports = QuestionController