/**
 * @param rangeLen {number} length of range to be returned
 * @param beginWith {number} the number at which the range begins   
 * @returns an array of integer number begins from zero
 * @author Jana R <janagr7@gmail.com>
 * 
 * @example range(1)  
 */

function range(beginWith, rangeLen) {
  let array = [];
  let _rangeLen = beginWith + rangeLen;
  for (let i = beginWith; i < _rangeLen; i++) {
    array.push(i)
  }
  return array;
}

module.exports = range;
