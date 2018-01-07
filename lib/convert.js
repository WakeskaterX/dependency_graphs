function asciiArrayToText(ascii) {
  let result = '';

  for (let a of ascii) {
    result += String.fromCharCode(a);
  }

  return result;
}

module.exports = {
  asciiArrayToText,
};
