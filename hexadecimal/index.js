
const hexTable = () => {
  let hexArray = [];
  for (let i = 0; i < 256; ++i) {
    hexArray.push('%' + ((i < 16 ? '0' : '') + i.toString(16)).toUpperCase());
  }
  return hexArray;
};

const hexValue = (char) => {
  if (char.length == 1) {
    let charCode = char.charCodeAt(0);
    return hexTable()[charCode];
  } else {
    console.log(`Please pass a single charactor.`);
  }
}

/**
* @param {string} str a string of which some of the characters to be replaced with %hexadecimal value 
* @param {string} pattern a regular expression pattern for charcters to be hexadecimalised

*/
const hexify = (str, pattern) => {
  return str.replace(pattern, hexValue);
}

module.exports = {
  hexTable: hexTable,
  hexValue: hexValue,
  hexify: hexify
};
