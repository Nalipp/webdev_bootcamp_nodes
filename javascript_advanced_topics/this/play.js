// var person = {
//   firstName: 'Colt',
//   sayHi: function() {
//     return 'Hi ' + this.firstName;
//   },
//   determineContext: function() {
//     return this === person;
//   },
//   dog: {
//     sayHello: function() {
//       return 'Hello ' + this.firstName;
//     },
//     determineContext: function() {
//       return this === person;
//     },
//   }
// }

// console.log(person.sayHi());                                // 'Hi Colt'
// console.log(person.determineContext());                     // true
// console.log(person.dog.sayHello());                         // 'Hello undefined'
// console.log(person.dog.sayHello.call(person));              // 'Hello Colt'
// console.log(person.dog.determineContext.call(person));      // true


// var outer = {
//   fName: 'nate',
//   lName: 'lipp',
//   fullName: function() {
//     return this.fName + ' ' + this.lName;
//   }
// }

// console.log(outer.fName); 
// console.log(outer.fullName()); 

// let colt = {
//   fName: 'Colt',
//   sayHello: function() {
//     return 'Hello ' + this.fName;
//   }
// }

// let elie = {
//   fName: 'Elie',
// }

// console.log(colt.sayHello());
// console.log(colt.sayHello.call(elie));

// let colt = {
//   fName: 'Colt',
// }

// let elie = {
//   fName: 'Elie',
// }

// console.log(sayHi.call(colt));
// console.log(sayHi.call(elie));

// function base() {
//   return 'www.google/api/' + lng + '/' + lat + '/' + randomized
// }

// let search = {
//   lon: 200,
//   lat: 300,
// }

// let github = 'www.github.com';

// function sayHi(a, b, c, d) {
//   for (let i = 0; i < (a + b + c + d); i++) {
//     console.log("Hi " + this.fName + (a + b));
//   }
// }

// let colt = {
//   fName: 'Colt',
// }

// let elie = {
//   fName: 'Elie',
// }

// sayHi.call(colt, 1, 1, 1, 1);
// sayHi.apply(elie, [2, 2, 2, 2]);

// var arr = [1, 2, 5, 4];
// var max = Math.max(arr)
// console.log(max);          // NaN

// var max = Math.max.apply(this, arr);
// console.log(max);          // 5

// let add = (a, b, c) => {
//   return a + b + c;
// }

// var arr = [1, 2, 3];
// console.log(add.apply(this, arr));

// function addNumbers(a, b, c, d) {
//   return 'hi ' + this.fName + 'just calculated ' + (a + b + c + d);
// }

// let elie = {
//   fName: 'elie ',
// }

// var functionDef = addNumbers.bind(elie, 1, 2, 3, 4);
// console.log(functionDef());                              // 'hi elie calculated 10'

// var functionDef = addNumbers.bind(elie, 1, 2);
// console.log(functionDef(3, 3));                          // 'hi elie calculated 9'


// var text = 'outside';
// function logIt(){
//   console.log(text);
//   let text = 'inside';
// };
// logIt();

// let sum = (a, b) => {
//   if (b) return a + b;
//   return function(n) {
//     return a + n;
//   }
// }

// console.log(sum(2,3));   // Outputs 5
// console.log(sum(2)(3));  // Outputs 5

// let colt = {
//   name: 'Colt',
//   delayedGreeting: function() {
//     console.log('outer this', this.name)    // Colt -> 'this' is the colt object
//     setTimeout(function() { 
//       console.log('inner this', this.name)  // undefined -> 'this' is the window object not the colt objet
//     }.bind(this), 1000);
//   }
// }

// colt.delayedGreeting();

// let toArray = (a, b, c) => {
//   return [].slice.call(a, b, c);
// }

// console.log(toArray(1, 2, 3));

// function sumEvenArguments(){
//   let args = [].slice.call(arguments);
//   let sum = 0;
//   for (let i = 0; i < args.length; i++) {
//     if (args[i] % 2 === 0) sum += args[i];
//   }
//   return sum;
// }

// console.log(sumEvenArguments(1, 2, 3, 4));

// function invokeMax(fn, num){
//   var counter = 0;
//   return function(a, b) {
//     counter += 1;
//     if (counter > num) return "Maxed Out!";
//     return fn(a, b);
//   };
// }

// function add(a,b){
//   return a+b
// }

// var addOnlyThreeTimes = invokeMax(add, 3);
// console.log(addOnlyThreeTimes(1,2)) // 3
// console.log(addOnlyThreeTimes(2,2)) // 4
// console.log(addOnlyThreeTimes(1,2)) // 3
// console.log(addOnlyThreeTimes(1,2)) // "Maxed Out!"


// Write a function called once which accepts one parameter, another function. Once should return a new function that can only be invoked once.

// Examples:
// function once(fn, thisArg){
//   var ifNew = 0;
//   return function addOnce(a, b) {
//     ifNew += 1;
//     if (ifNew === 1) return fn(a, b);
//     else return undefined;
//   }
// }

// function add(a,b){
//   return a+b
// }

// var addOnce = once(add);
// console.log(addOnce(2,2)); // 4
// console.log(addOnce(2,2)); // undefined
// console.log(addOnce(2,2)); // undefined

// Examples:

//     function firstNameFavoriteColor(favoriteColor){
//         return this.firstName + "'s favorite color is " + favoriteColor
//     }
    
//     var person = {
//         firstName: 'Elie'
//     }
    
//     var bindFn = bind(firstNameFavoriteColor, person);
//     bindFn('green') // "Elie's favorite color is green"
    
//     var bindFn2 = bind(firstNameFavoriteColor, person, 'blue');
//     bindFn2('green') // "Elie's favorite color is blue" 
    
//     function addFourNumbers(a,b,c,d){
//         return a+b+c+d;
//     }

//     bind(addFourNumbers,this,1)(2,3,4) // 10
//     bind(addFourNumbers,this,1,2)(3,4) // 10
//     bind(addFourNumbers,this,1,2,3)(4) // 10
//     bind(addFourNumbers,this,1,2,3,4)() // 10
//     bind(addFourNumbers,this)(1,2,3,4) // 10
//     bind(addFourNumbers,this)(1,2,3,4,5,6,7,8,9,10) // 10

// */

function bind(fn, thisArg){
  console.log(arguments)
}

function addFourNumbers(a,b,c,d){
  return a+b+c+d;
}

bind(addFourNumbers,this,1) // 10

// bind(addFourNumbers,this,1)(2,3,4) // 10
// bind(addFourNumbers,this,1,2)(3,4) // 10
// bind(addFourNumbers,this,1,2,3)(4) // 10
// bind(addFourNumbers,this,1,2,3,4)() // 10
// bind(addFourNumbers,this)(1,2,3,4) // 10
// bind(addFourNumbers,this)(1,2,3,4,5,6,7,8,9,10) // 10
