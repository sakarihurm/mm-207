const express = require('express')
const router = express.Router()
const fetchQuiz = require('./fetchQuiz')

const userid = 1
const loggedIn = true

router.get('/quizzes', (req, res) => {
  if (!loggedIn) {
    return res.send('user not logged in')
  }
  const quiz = fetchQuiz(userid)
  res.send(quiz)
})

// If user adds question to a quiz then it is posted to database
router.post('/quizzes/:questionid', (req, res) => {
  res.json({userid: 123, questionid: req.params.questionid})
  res.send('added question to quiz')
})

module.exports = router