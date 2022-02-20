/**
 * 
 * @param {string} a para of text to be padded with ellipsis
 * @param {number} lineLength number of characters per line
 * @param {number} allowedLines total number of lines to be set visible
 * @returns {string} a string of text with ellipsis 
 * 
 * @example 
 * var myText = `In order to understand the computer in depth,for the past couple of years I have been learning computers in layered approach from transistors to machine learning. This journey of learning made me realize how zeros and ones are exploited and abstracted for solving complex problems. In order to understand the computer in depth, for the past couple of years I have been learning computers in layered approach from transistors to machine learning. This journey of learning made me realize how zeros and ones are exploited and abstracted for solving complex problems.`;

padWithEllipsis(myText, 65, 3);
 */
function padWithEllipsis(text, lineLength, allowedLines) {

  let totalChars = allowedLines * lineLength;
  let _slicedText = text.slice(0, totalChars)
  let slicedText = _slicedText.slice(0, _slicedText.lastIndexOf(" "));

  return text.length > totalChars ? slicedText + "..." : text;

}

module.exports = padWithEllipsis;



