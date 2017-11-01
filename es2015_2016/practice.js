// var name = 'nate';

// if (name === 'nate') {
//   const comment = 'Hi there nate';
// }

// console.log(comment); 

// function hoist() {
//   return console.log(name);
//   let name = 'nate'
// }

// hoist() // undefined


// for (var i = 0; i < 5; i++) {
//   (function(j) {
//     setTimeout(function() {
//       console.log(j);
//     },0 )
//   })(i);
// }


// let greeting = {
//   name : 'nate',
//   greet : function() {
//     setTimeout(() => {
//       console.log(`Hi there ${this.name}`);
//     }, 1000);
//   }
// }

// console.log(greeting.name);
// greeting.greet();

// bind is used insead of call or apply because we do not want to immediatley invoke the function

// let talk = (word1, word2) => {
//   console.log(arguments);
// }

// talk('hi', 'bye');

// function talk(word1, word2) {
//   console.log(arguments);
// }

// talk('hi', 'bye');
