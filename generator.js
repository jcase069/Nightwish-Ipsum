const lyrics = require('./lyrics');

function randomParagraphSize(avgParagraphSize) {
  return Math.floor(Math.random() * (avgParagraphSize * 2 - 1)) + 1;
}

function randomLyric() {
  return lyrics[Math.floor(Math.random() * lyrics.length)];
}

function generateParagraph(avgParagraphSize) {
  let paragraphSize = randomParagraphSize(avgParagraphSize);
  let text = '<pre>'+randomLyric();
  for (let i=1; i<paragraphSize; ++i) {
    text += ' ' + randomLyric();
  }
  return text+'</pre>';
}

module.exports = function(paragraphs, avgParagraphSize) {
  let text = generateParagraph(avgParagraphSize);
  for (let i=1; i<paragraphs; ++i) {
    text += '\n\n'+generateParagraph(avgParagraphSize);
  }
  return text;
}
