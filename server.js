const express = require('express');
const serverRenderer = require('./build/serverRenderer').default;

const port = 3000;
const app = express();

app.get(['/', '/search', '/film/:id'], (req, res) => {
  serverRenderer()(req, res);
});

app.use(express.static(__dirname + '/build'));

app.listen(3000, () => {
  console.info('Express listening on port: ' + port);
});

module.exports = app;