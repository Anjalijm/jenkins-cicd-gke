'use strict';

const express = require('express');

// Constants
const PORT = process.env.PORT || 3000;

// App
const app = express();
app.get('/', function (req, res) {
  res.send('welcome to my world\n');
});

app.listen(PORT);
console.log('Running on http://localhost:' + PORT);