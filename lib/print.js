const printLetter = require('./printLetter');
const convert = require('./convert');

function printWord(word) {
  return Promise.mapSeries(word.split(''), (w) => printLetter(w));
}

function printAsciiUpdated(ascii) {
  return printWord(convert.asciiArrayToText(ascii));
}

module.exports = {
  word: printWord,
  ascii: printAsciiUpdated,
};
