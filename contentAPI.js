const express = require('express')
const router = express.Router()
 

router.get('/content', (req, res) => {
  res.send('test content')

  //TODO: code that fetches user's quiz if logged in
})

// If user adds question to a quiz then it is posted to database
router.post('/content', (req, res) => {
  res.json({userid: 123, question: '1+1x0?'})
  res.send('added question to quiz')
})

module.exports = router