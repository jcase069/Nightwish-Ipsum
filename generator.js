const lyrics = require('./lyrics');

function randomParagraphSize(avgParagraphSize) {
  return Math.floor(Math.random() * (avgParagraphSize * 2 - 1)) + 1;
}

function randomLyric() {
  return lyrics[Math.floor(Math.random() * lyrics.length)];
}

function generateParagraph(avgParagraphSize, options) {
  let paragraphSize = randomParagraphSize(avgParagraphSize);
  let text = '';
  if (options.paragraphPre) {
    text = text + options.paragraphPre;
  }
  text += randomLyric();
  for (let i=1; i<paragraphSize; ++i) {
    text += ' ' + randomLyric();
  }
  if (options.paragraphPost) {
    text += options.paragraphPost;
  }
  return text;
}

function generateText(paragraphs, avgParagraphSize, options) {
  let text = '';
  if (options.pre) {
    text += options.pre;
  }
  text += generateParagraph(avgParagraphSize, options);
  for (let i=1; i<paragraphs; ++i) {
    if (options.paragraphBetween) {
      text += options.paragraphBetween;
    }
    text += generateParagraph(avgParagraphSize, options);
  }
  if (options.post) {
    text += options.post;
  }
  return text;
}

exports.html = function(paragraphs, avgParagraphSize) {
  const options = {
    paragraphPre: '<p>',
    paragraphPost: '</p>\n',
  }
  return generateText(paragraphs, avgParagraphSize, options);
}

exports.text = function(paragraphs, avgParagraphSize) {
  const options = {
    paragraphBetween: '\n\n',
    pre: '<pre>',
    post: '<post>',
  };
  return generateText(paragraphs, avgParagraphSize, options);
}
