require('newrelic');

const express = require('express');
const path = require('path');

const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, '/public')));

const port = 5882;

app.get('/:projectId', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/index.html'));
});

app.listen(port, () => {
  console.log('server listening at: ' + port);
});
