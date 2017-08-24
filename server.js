const express = require('express');
const app = express();
const staticPages = require('express-static');
const generator = require('./generator');

app.get('/text', function(req, res) {
  console.log('generating');
  let text = generator.text(3,3);
  console.log(text);
  res.send(text);
});

app.use(staticPages('./public'));

app.listen(3000, function() {
  console.log('Listening on port 3000');
})
