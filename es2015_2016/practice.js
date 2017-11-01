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


for (var i = 0; i < 5; i++) {
  (function(j) {
    setTimeout(function() {
      console.log(j);
    },0 )
  })(i);
}

