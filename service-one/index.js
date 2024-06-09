const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello MBI from Rafael Avella, DevSecOps/SRE - This is Service One')
})

app.get('/healthcheck', function (req, res) {
    res.json({
      status: 'OK',
      message: 'Service One is running smoothly',
      timestamp: new Date().toISOString()
    })
})

app.listen(3000)