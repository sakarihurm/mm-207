const express = require('express')
const router = express.Router()


router.get('/content', (req, res) => {
  res.send('content!')
})

module.exports = router