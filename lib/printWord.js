const printLetter = require('./printLetter');

function printWord(word) {
  return Promise.mapSeries(word.split(''), (w) => printLetter(w));
}

module.exports = printWord;
