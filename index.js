const express = require('express');


const app = express();

app.get('/', function (req, res) {
  res.send('hello world')
})

app.listen(3000,() => console.log('Listening to port 3000'));