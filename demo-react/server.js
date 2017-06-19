'use strict';

const cors = require('cors');
const express = require('express');
const PORT = process.env.PORT || 3000;
const app = express();

app.use(cors());

app.use(express.static(`${__dirname}/build`))
app.get('*', function(req,res) {
  res.sendFile('index.html', {root:`${__dirname}/build`})
})

app.listen(PORT, () => {
  console.log('Server running, catch it at port: ' + PORT);
})
