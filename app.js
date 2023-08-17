'use strict';

const express = require('express')
const app = express();

const port = 8086;
const host = '0.0.0.0';

app.get('/', (req, res) => {
  res.send('Hello World from IBM Cloud Essentials! Austin Class');
})

app.listen(port, host);
console.log(`Running on http://${host}:${port}`);
