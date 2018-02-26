const Answer = require('../models/Answer')
const Question = require('../models/Question')

class AnswerController {
  // insert answer
  static create(req, res) {
    console.log('masuk siniiii')
    let answer = new Answer({
      author: req.decoded.id,
      answer: req.body.answer
    })
    answer.save()
      .then(answerResult => {
        console.log(answerResult, 'ini answer')
        Question.findById(req.params.id)
          .then(question => {
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

  // insert answer with put question
  static update(req, res) {
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
                re.status(200).json({
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

module.exports = AnswerController