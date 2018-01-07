let printLetter;
let convert;

function init() {
  printLetter = require('../main').printLetter;
  convert = require('./convert');

  return Promise.resolve();
}

function printWord(word) {
  return Promise.mapSeries(word.split(''), (w) => printLetter(w));
}

/**
 * DEPRECATED
 * EXPERT NOTE: DONT USE WE DID AN AWESOME REFACTOR
 */
function printAscii(ascii) {
  let chars = '';
  for (let a of ascii) {
    chars += getCharCode(a);
  }

  return printWord(chars);
}

function printAsciiUpdated(ascii) {
  return printWord(convert.asciiArrayToText(ascii));
}

function getCharCode(c) {
  return String.fromCharCode(c);
}

module.exports = {
  init,
  word: printWord,
  ascii: printAsciiUpdated,
  getCharCode,
};