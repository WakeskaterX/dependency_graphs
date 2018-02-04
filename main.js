// Super Amazing CLI Application
global.Promise = require('bluebird');

const print = require('./lib/print');
const convert = require('./lib/convert');
const printLetter = require('./lib/printLetter');

function runApp(input) {
  return printLetter('H')
    .then(() => printLetter('e'))
    .then(() => printLetter('l'))
    .then(() => printLetter('l'))
    .then(() => printLetter('o'))
    .then(() => printLetter(' '))
    .then(() => print.ascii(input))
    .then(() => print.word('\n'))
    .then(() => Promise.delay(1000))
    .then(() => process.exit());
}

runApp([87, 111, 114, 108, 100]);
