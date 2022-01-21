//extracts implementation

'use strict';

const color = require('ansi-colors');
const isString = (item) => typeof item == "string";
const isNumber = (item) => typeof item == "number";
const isFunction = (item) => typeof item == "function";
const isNull = (item) => item == null;
const isUndefined = (item) => item == undefined;
const isArray = (item) => item instanceof Array;
const isObject = (item) => (typeof item == "object") && !isNull(item) && !isUndefined(item) && !isArray(item);

const hasObjectFunction = (obj) => {
  let hasObjFn = false;
  for (let item of Object.keys(obj)) {
    if (isFunction(obj[item]) || isObject(obj[item])) {
      hasObjFn = true;
      break;
    }
  }
  return hasObjFn;
}

const styleFunction = (str) => {
  return str.replace(/function /g, (txt) => color.cyan(txt));
}

const printObjects = (moduleExports) => {

  for (let item in moduleExports) {
    let _item = moduleExports[item];
    let _isFunction = isFunction(_item);
    let _isObject = isObject(_item);
    let _isArray = isArray(_item);
    let _isString = isString(_item);
    let _isNumber = isNumber(_item);
    let _isNull = isNull(_item);
    let _isUndefined = isUndefined(_item);

    try {
      if (_isFunction) {
        let stringified = "" + _item;
        console.log(`\n${color.cyanBright(item)}: ${stringified}`);
      } else if (_isObject) {
        if (hasObjectFunction(_item)) {
          printObjects(_item);
        } else {
          if (Object.keys(_item).length > 0) {
            console.log(`${color.white(item)}: `);
            console.log(_item);
          } else {
            console.log(`${color.white(item)}: {}`);
          }
        }
      } else if (_isArray) {
        console.log(`\n${item}: `);
        console.log(_item);
      } else {
        if (_isString) {
          console.log(`${color.white(item)}: ${color.green("'" + _item + "'")}`);
        } else if (_isNumber) {
          console.log(`${color.white(item)}: ${color.yellow(_item)}`);
        } else if (_isNull) {
          console.log(`${color.white(item)}: ${color.whiteBright(_item)}`);
        } else if (_isUndefined) {
          console.log(`${color.white(item)}: ${color.gray(_item)}`);
        } else {
          console.log(`${color.white(item)}: ${color.gray(_item)}`);
        }
      }

    } catch (e) {
      console.log(e);
      continue;
    }
  }
}

const extractCode = (moduleName) => {
  try {
    let moduleExports = require(moduleName);
    if (moduleExports) {
      printObjects(moduleExports);
    }
  } catch (e) {
    console.error(e);
  }
};

module.exports = extractCode;
