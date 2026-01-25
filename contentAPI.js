const express = require('express')
const router = express.Router()
const fetchQuiz = require('./fetchUserQuiz')

const userid = 1
const loggedIn = true

router.get('/content', (req, res) => {
  if (!loggedIn) {
    return res.send('user not logged in')
  }
  const quiz = fetchQuiz(userid)
  res.send(quiz)
})

// If user adds question to a quiz then it is posted to database
router.post('/content', (req, res) => {
  res.json({userid: 123, question: '1+1x0?'})
  res.send('added question to quiz')
})

module.exports = router