let getCharCode;

function asciiArrayToText(ascii) {
  let result = '';

  for (let a of ascii) {
    result += getCharCode(a);
  }

  return result;
}

module.exports = {
  asciiArrayToText,
};

getCharCode = require('./print').getCharCode;
