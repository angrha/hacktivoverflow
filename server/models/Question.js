const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const questionSchema = new Schema({
  author: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  title: {
    type: String,
    required: [true, 'please insert title']
  },
  desc: {
    type: String,
    required: [true, 'insert your description']
  },
  tag: Array,
  answers: [{
    type: Schema.Types.ObjectId,
    ref: 'Answer'
  }],
  votes: [{
    author: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    },
    thumbs: Boolean
  }]
}, {
  timestamps: true
})

const Question = mongoose.model('Question', questionSchema)

module.exports = Question