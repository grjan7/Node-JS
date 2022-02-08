/**
 * @param rangeLen {number} length of range to be returned
 * @returns an array of integer number begins from zero
 * @author Jana R <janagr7@gmail.com>
 *
 */

function range(rangeLen) {
  let array = [];
  for (let i = 0; i < rangeLen; i++) {
    array.push(i)
  }
  return array;
}

module.exports = range;
