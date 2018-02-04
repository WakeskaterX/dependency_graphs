function printLetter(l) {
  return Promise.delay(100).then(() => Promise.resolve(process.stdout.write(l)));
}

module.exports = printLetter;