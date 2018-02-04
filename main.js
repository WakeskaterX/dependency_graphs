// Super Amazing CLI Application
global.Promise = require('bluebird');

let print;
let convert;

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

function printLetter(l) {
  return Promise.delay(100).then(() => Promise.resolve(process.stdout.write(l)));
}

module.exports = {
  printLetter,
};

print = require('./lib/print');
convert = require('./lib/convert');

runApp([87, 111, 114, 108, 100]);
