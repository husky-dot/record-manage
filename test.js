

var promiseResolve = (promiseCrater = function(
  n = 0
) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve({
        resolvedAfterNSeconds: n
      });
    }, n * 1000);
  });
});
var promiseREject = (promiseCrater = function(
  n = 0
) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      reject({
        rejectedAfterNSeconds: n
      });
    }, n * 1000);
  });
});


console.time("Promise.race");
var promisesArray = [];
promisesArray.push(promiseResolve(4));
promisesArray.push(promiseResolve(6));
promisesArray.push(promiseResolve(5));
promisesArray.push(promiseREject(3));
promisesArray.push(promiseResolve(4));
var promisesRace = Promise.race(promisesArray);
promisesRace.then(function(values) {
  console.timeEnd("Promise.race");
  console.log("率先状态为 resolve 的 Promise", values);
});
promisesRace.catch(function(reason) {
  console.timeEnd("Promise.race");
  console.log("率先状态为 reject 的 Promise", reason);
});