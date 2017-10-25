/* 
Write a function called guessingGame which takes in one parameter amount. 

The function should return another function that takes in a parameter called guess.

In the outer function, you should create a variable called answer which is the result of a random number between 0 and 10 
  as well as a variable called guesses which should be set to 0.

In the inner function, if the guess passed in is the same as the random number (defined in the outer function) 
  - you should return the string "You got it!". 

If the guess is too high return "Your guess is too high!" 
  and if it is too low, return "Your guess is too low!". 
  
You should stop the user from guessing if the amount of guesses they have made is greater than the initial amount passed to the outer function.

You will have to make use of closure to solve this problem.
*/

// function guessingGame(amount){
//   var answer = Math.floor(Math.random() * 11);
//   var guesses = 0;
//   return function (guess) {
//     if (guesses >= amount) {
//       return "All done playing!";
//     guesses++;
//     if(guess === answer) {
//       guesses = Number.MAX_VALUE;
//       return "You got it!";
//     }
//     if (guesses === amount) {
//       return "No more guesses the answer was " + answer;
//     }
//     if (guess > answer) return "Your guess is too high!";
//     if (guess < answer) return "Your guess is too low!";
//   }
// }

// function guessingGame(amount){
//   // var answer = Math.floor(Math.random() * 11);
//   var answer = 5;
//   var completed = false;
//   var guesses = 0;
//   return function(guess){
//     if(!completed){
//       guesses++;
//       if(guesses === amount + 1){
//         completed = true;
//         return `No more guesses. The answer was ${answer}`;
//       } else if(guess > answer){
//         return `Your guess is too high`;
//       } else if(guess < answer){
//         return `Your guess is too low`;
//       } else if(guess === answer){
//         completed = true;
//         return `You got it!`;
//       }
//     }
//     return "all done playing";
//   }
// }
function guessingGame(amount){
    var answer = Math.floor(Math.random()*11);
    var guesses = 0;
    var completed = false;
    return function(guess){
        if(!completed){
            guesses++
            if(guess === answer) {
                completed = true;
                return "You got it!"
            }
            else if(guesses === amount) {
                completed = true;
                return "No more guesses the answer was " + answer;
            }
            else if(guess > answer) return "Your guess is too high!"
            else if(guess < answer) return "Your guess is too low!"
        }
        return "All done playing!"
    }
}

var game = guessingGame(3);
console.log(game(1)); // "You're too low!"
console.log(game(8)); // "You're too low!"
console.log(game(7)); // "You got it!"
console.log(game(5)); // "You got it!"
console.log(game(5)); // "You got it!"
