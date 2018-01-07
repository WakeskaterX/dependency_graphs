// Super Amazing CLI Application
global.Promise = require('bluebird');

const printWord = require('./lib/printWord');
const convert = require('./lib/convert');

function runApp(input) {
  return printWord('\nHello ')
    .then(() => printWord(convert.asciiArrayToText(input)))
    .then(() => printWord('\n'))
    .then(() => Promise.delay(1000))
    .then(() => process.exit());
}

runApp([87, 111, 114, 108, 100]);
