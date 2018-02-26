const Answer = require('../models/Answer')
const Question = require('../models/Question')

class AnswerController {
  // delete answer
  static delete(req, res) {
    Answer.findOneAndRemove({
      _id: req.params.id,
      author: req.decoded.id
    })
      .then(answer => {
        res.status(200).json({
          message: 'success delete answer',
          answer: answer
        })
      })
      .catch(err => {
        console.log(err)
        res.status(500).send(err)
      })
  }

  static update(req, res) {
    Answer.findOne({
      _id: req.params.id,
      author: req.decoded.id
    })
      .then(result => {
        result.answer = req.body.answer || result.answer
        result.save()
          .then(updateAnswer => {
            res.status(200).json({
              message: 'succes update answer',
              answer: updateAnswer
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
}

module.exports = AnswerController