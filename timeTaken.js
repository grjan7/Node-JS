'use strict';
/**
 * Calculating the amount of time taken to execute the function.
 * 
 * @param {function} func 
 * 
 */
const timeTakenByAFunction = (func) => {
  let time1, time2;
  time1 = Date.now();
  typeof func === "function" ? func() : console.log(`It must be a function.`);
  time2 = Date.now();
  time1 != undefined && time2 > time1 ? console.log(`Time Taken: ${time2} - ${time1} = ${time2 - time1} ms.`) : null;
}

//usage
timeTakenByAFunction(() => console.log("This is a function."));
