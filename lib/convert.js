function asciiArrayToText(ascii) {
  let result = '';

  for (let a of ascii) {
    result += getCharCode(a);
  }

  return result;
}

function getCharCode(c) {
  return String.fromCharCode(c);
}

module.exports = {
  asciiArrayToText,
};