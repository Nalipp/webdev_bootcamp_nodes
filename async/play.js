// let add = (num1, num2) => num1 + num2;
// let subtract = (num1, num2) => num1 - num2;
// let multiply = (num1, num2) => num1 * num2;

// let calculate = (num1, num2, fn) => {
//   return fn(num1, num2);
// }

// console.log(add(1, 3));
// console.log(subtract(3, 1));
// console.log(multiply(3, 2));
// console.log(calculate(3, 2, add));
// console.log(calculate(3, 2, subtract));
// console.log(calculate(3, 2, multiply));

// let greet = (name, fn) => {
//   return 'hi ' + fn(name);
// }

// let shoutIt = (str) => {
//   return str.toUpperCase();
// }

// console.log(greet('tim', shoutIt));

// let greet = (name, upper, punct) => {
//  console.log('Hi ' + upper(name) + punct());
// }

// let transformCb = (str) => {
//   return str[0].toUpperCase() + str.slice(1)
// }

// let randomPunctuateCb = () => {
//   return ['!', '.', '?'][Math.floor(Math.random() * 3)];
// }

// console.log(greet('nate', transformCb, randomPunctuateCb));

// greet('nate', 
//       (name) => name.toUpperCase(), 
//       () => ['!', '.', '?'][Math.floor(Math.random() * 3)]
// );

// let greet = (name, fn) => {
//   console.log('Hi ' + name + fn()); 
// }

// greet('nate', () => ['!', '.', '?'][Math.floor(Math.random() * 3)]);

// let map = (arr, cb) => {
//   let results = [];
//   for (let i = 0; i < arr.length; i++) {
//     results.push(cb(arr[i], i, arr));
//   }
//   return results;
// }

// var arr = [1, 2, 3, 4];

// let results = map(arr, (element, i, arr) => {
//   console.log(arr);
//   console.log(i); 
//   return element * 3
// });

// console.log(results);

// function findIndex(arr, cb) {
//   for (let i = 0; i < arr.length; i++) {
//     if (cb(arr[i])) {
//       return i;
//     }
//   }
//   return -1;
// }

// let arr = ['Java', 'Ruby', 'JavaScript'];

// let result = findIndex(arr, (curElement, curIndex, array) => {
//   return curElement === 'JavaScript';
// });

// console.log(result); 

// setTimeout(() => console.log('hi'), 1000);

// let count = 0;
// let id = setInterval(() => {
//   count++;
//   if (count === 4) clearInterval(id);
//   console.log(count);
// }, 1000);

// let count = 2;

// let id = setInterval(() => {
//   if (count === 0) {
//     console.log("ring, ring"); 
//     clearInterval(id);
//   }
//   else console.log(count);
//   count--;
// }, 1000);

// function countDown(seconds){
//     let id = setInterval(function(){
//         if(seconds === 0){
//             console.log("Ring ring ring!");
//             clearInterval(id);
//         }else{
//             console.log(`Timer: ${seconds}`);
//             seconds--;
//         }
//     },1000)
// }


// function countDown(t) {
//   var i = setInterval(function() {
//     console.log("Timer:", t);
//     t--; 
//     if (t === 0) {
//       console.log("Ring ring!!!");
//       clearInterval(i);
//       return;
//     }
//   }, 1000);
// }

// function printer(seconds){
//     let remainingSeconds=seconds;
//     let intervalID=setInterval(function(){
//         if(remainingSeconds===0){
//             console.log("Ring Ring Ring")
//             clearInterval(intervalID);
//         }
//         else{
//             console.log(remainingSeconds);
//             remainingSeconds--;
//         }},1000)}

// printer(2);

// let p1 = new Promise((resolve, reject) => {
//   let arr = [1, 2, 3, 4];
//   if (arr.length === 3) resolve(arr);
//   else reject('Incorrect length');
// });

// p1.then((arr) => {
//   console.log('The result is : ' + arr);
// }).catch((error) => {
//   console.log('There was an error: ' + error); 
// });

// p1 = new Promise((resolve, reject) => {
//   setTimeout(() => { 
//     let randomNum = Math.floor(Math.random() * 100);
//     if (randomNum > 50) resolve('Win: ' + randomNum);
//     else reject('Loose: ' + randomNum);
//   }, 1000);
// });

// p1
//   .then((result) => console.log(result))
//   .catch((result) => console.log(result));

// var count = 0;
// setTimeout(() => {
//   count++;
//   console.log(count);
//   setTimeout(() => {
//     count++;
//     console.log(count);
//     setTimeout(() => {
//       count++;
//       console.log(count);
//     }, 3000);
//   }, 2000);
// }, 1000);

// var count = 0;
// let p1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     count++;
//     resolve(count);
//   }, 2000);
// });

// p1.then((result) => {
//   console.log(result);
//   return new Promise((resolve, reject) => {
//     return setTimeout(() => {
//       count += 4;
//       resolve(count);
//     }, 500);
//   });
// }).then((result) => {
//   console.log(result); 
//     return result * 8;
// }).then((result) => {
//   console.log(result); 
// });

// let counter = 0;
// let incCounter = () => {
//   counter += 1;
//   console.log('Counter : ' + counter);
// };

// let runLater = (cb, timeInMs) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       let res = cb();
//       resolve(res);
//     }, timeInMs);
//   });
// };

// runLater(incCounter, 2000).then(() => {
//   return runLater(incCounter, 500);
// }).then(() => {
//   return runLater(incCounter, 100);
// });
