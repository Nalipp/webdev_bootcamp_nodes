// let outter = () => {
//   let count = 0;
//     console.log(count);
//   return inner = () => {
//     let id = setInterval(() => {
//       count++
//       console.log(count);
//     }, 500);
//     let stop = () => {
//       console.log(id);
//     }
//     console.log(stop);
//   }
// }

// let newTimmer = outter;

// newTimmer()();

// function counter() {
//   let count = 0;
//   return function() {
//     count ++;
//     return count;
//   }
// }

// let count1 = counter();

// console.log(count1());    // 1
// console.log(count1());    // 2


// let count2 = counter();

// console.log(count2());    // 1

// let classRoom = () => {
//   let instructors = ['Elie', 'Colt'];
//   return {
//     getInstructors: () => {
//       return instructors;
//     },
//     addInstructors: (name) => {
//       instructors.push(name);
//       return instructors;
//     }
//   }
// }

// let javaScript101 = classRoom();

// console.log(javaScript101.getInstructors());
// console.log(javaScript101.addInstructors('Nate'));

// let node101 = classRoom();

// console.log(node101.getInstructors());
// node101.getInstructors().push('bla');

// console.log(node101.getInstructors());

// let workShift = () => {
//   let startTime = '00:00';
//   let workers = [];
//   return {
//     getStartTime: () => {
//       return startTime.slice();
//     },
//     getWorkers: () => {
//       return workers.slice(); // slice() prevents you from being able to manipulate the workers array
//     },
//     setStartTime: (time) => {
//       startTime = time;
//       return startTime.slice();
//     },
//     addWorker: (name) => {
//       workers.push(name);
//       return workers.slice();
//     },
//   }
// }

// let saturday = workShift();

// saturday.setStartTime('2:00');
// saturday.addWorker('Nate');
// saturday.addWorker('Nick');

// console.log(saturday.getStartTime());
// console.log(saturday.getWorkers());

// saturday.getWorkers().push('Jess')  // without slice() this code would allow you to manipulate the workers array
// console.log(saturday.getWorkers()); // ['Nate', 'Nick', 'Jess']

