const express = require('express');
const app = express();
const staticPages = require('express-static');
const generator = require('./generator');

app.get('/text', function(req, res) {
  var paragraphs = req.query.paragraphs ? parseInt(req.query.paragraphs) : 3;
  var paragraphSize = req.query.paragraphSize ? parseInt(req.query.paragraphSize) : 3;
  let text = generator.text(paragraphs, paragraphSize);
  res.send(text);
});

app.use(staticPages('./public'));

app.listen(3000, function() {
  console.log('Listening on port 3000');
})
