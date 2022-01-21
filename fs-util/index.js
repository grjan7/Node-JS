'use strict';

/**
 * @author Jana Rangasamy EmailID:<janagr7@gmail.com>
 * @description created on 20-01-2022.
 */

const fs = require('fs');
const path = require('path');

/**
 * 
 * @param {string} srcPath a string represents a path
 * @returns {boolean} true if the srcPath representing a filepath
 * 
 */
const isFile = (srcPath) => {
  try {
    return fs.statSync(srcPath).isFile()
  } catch (e) {
    console.error(e.message);
  }
}

/**
 * 
 * @param {string} srcPath a string represents a path.
 * @returns {boolean} true if the srcPath representing a directory.
 * 
 */
const isDirectory = (srcPath) => {
  try {
    return fs.statSync(srcPath).isDirectory();
  } catch (e) {
    console.error(e.message);
  }
}

/**
 * 
 * @param {string} srcPath a string represents a path.
 * @returns {Array} an array of files in the given path.
 * 
 */
const getFiles = (srcPath) => {

  let _dir = isFile(srcPath) ? path.dirname(srcPath) : srcPath;
  try {
    let data = fs.readdirSync(srcPath);
    if (data) {
      return data.filter((file) => isFile(path.join(_dir, file)));
    }
  } catch (e) {
    console.error(e.message);
  }
}

/**
 * 
 * @param {string} srcPath a string represents a path.
 * @param {string} fileType a string representing the extension name of the file.
 * @returns {Array} an array of filtered files based on their extension name.
 * 
 */
const getFilesByType = (srcPath, fileType) => {

  let _dir = isFile(srcPath) ? path.dirname(srcPath) : srcPath;
  let _fileType = fileType[0] == "." ? fileType : `.${fileType}`;
  try {
    let data = fs.readdirSync(srcPath);
    if (data) {
      return data.filter((file) => {
        let filePath = path.join(_dir, file);
        return isFile(filePath) && (path.extname(filePath) == _fileType);
      });
    }
  } catch (e) {
    console.error(e.message);
  }
}

/**
 * 
 * @param {string} srcPath a string represents a path. 
 * @returns {Array} an array of filtered directories.
 * 
 */
const getDirectories = (srcPath) => {

  let _dir = isFile(srcPath) ? path.dirname(srcPath) : srcPath;
  try {
    let data = fs.readdirSync(srcPath);
    if (data) {
      return data.filter((dir) => isDirectory(path.join(_dir, dir)));
    }
  } catch (e) {
    console.error(e.message);
  }
}

/**
 * 
 * @param {string} srcPath a string represents a path. 
 * @returns {Object} dirEnt an object details of files and subdirectories
 * 
 */
const getDirEntries = (srcPath) => {
  let dirEnt = {};
  try {
    dirEnt.parentDir = srcPath;
    dirEnt.subDirs = getDirectories(srcPath) && getDirectories(srcPath).length > 0 ? getDirectories(srcPath) : [];
    dirEnt.files = getFiles(srcPath) && getDirectories(srcPath).length > 0 ? getFiles(srcPath) : [];
    dirEnt.totalSubDirs = dirEnt.subDirs.length;
    dirEnt.totalFiles = dirEnt.files.length;

    return dirEnt;
  } catch (e) {
    console.error(e.message);
  }
}

module.exports = {
  isFile: isFile,
  isDirectory: isDirectory,
  getFiles: getFiles,
  getFilesByType: getFilesByType,
  getDirectories: getDirectories,
  getDirEntries: getDirEntries
};
