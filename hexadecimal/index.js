
const hexTable = () => {
  let array = [];
  for (let i = 0; i < 256; ++i) {
    array.push('%' + ((i < 16 ? '0' : '') + i.toString(16)).toUpperCase());
  }
  return array;
};

const hexValue = (char) => {
  if (char.length == 1) {
    let charCode = char.charCodeAt(0);
    return hexTable()[charCode];
  } else {
    console.log(`Please pass a single charactor.`);
  }
}

const hexify = (str, pattern) => {
  return str.replace(pattern, hexValue);
}

module.exports = {
  hexTable: hexTable,
  hexValue: hexValue,
  hexify: hexify
};
