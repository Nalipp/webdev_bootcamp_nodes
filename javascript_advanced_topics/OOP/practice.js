// function Person(firstName, lastName, favoriteColor, favoriteNumber) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.favoriteColor = favoriteColor;
//   this.favoriteNumber = favoriteNumber;
//   this.multiplyFavoriteNumber = function(num) {
//     return this.favoriteNumber * num;
//   }
// }

// let person1 = new Person('Nate', 'Lipp', 'blue', 4);

// console.log(person1);
// console.log(person1.multiplyFavoriteNumber(5));

// let arr = new Array;

// Array.prototype.map = function(cb) {
//   let result = [];
//   for (let i = 0; i < this.length; i++) {
//     result.push(cb(this[i], i, this));
//   }
//   return result;
// }

// arr.push(1);
// arr.push(2);
// arr.push(5);

// let mapped = arr.map(function(v, i, array) {
//   return (v * i);
// });

// console.log(mapped);

// String.prototype.reverse = function(cb) {
//   result = '';
//   for (let i = this.length -1; i >= 0; i--) {
//     result += this[i];
//   }
//   return result;
// }

// console.log("test".reverse()) // "tset"
// console.log("tacocat".reverse()) // "tacocat"

// function Person(firstName, lastName) {
//   this.firstName = firstName;
//   this.lastName = lastName;
// }

// Person.prototype.sayHi = function() {
//   return 'Hi ' + this.firstName + ' ' + this.lastName + '!';
// };

// function Student() {
//   Person.apply(this, arguments);
// }


// console.log(Person.prototype);  // Person {}
// console.log(Student.prototype); // Student {}

// Student.prototype = Person.prototype


// console.log(Person.prototype);  
// console.log(Student.prototype);

// let person1 = new Person('nate', 'lipp');
// console.log(person1); 
// console.log(person1.sayHi());

// let student1 = new Student('nate', 'lipp');
// console.log(student1);
// console.log(student1.sayHi());

// Student.prototype = Person.prototype;
// This works, hoever objects do not make a copy, they just point a reference to the same object, 
//   so now if we modify the Student.prototype object it will also modify the Person.prototype object

// Student.prototype = Object.create(Person.prototype);
// Student.prototype.constructor = Student;

// Student.prototype.status = function() {
//   return "I'm currently a student";
// }

// console.log(Person.prototype); 
// console.log(Student.prototype); 

// Student.prototype = new Object(Person.prototype);
//    when doing inheritance through the prototype (prototypical inheritance) you should not use the 'new Object'
//    becase 'new' will create its own prototype object, instead use Object.create();

// Student.prototype.status = function() {
//   return "I'm currently a student";
// }

// console.log(Person.prototype);   // Person { sayHi: [Function], status: [Function] }
// console.log(Student.prototype);  // Person { sayHi: [Function], status: [Function] }

// console.log(Person.prototype.constructor);  // [function: Person] 
// console.log(Student.prototype.constructor); // [function: Person] 

// reseting the constructor
// Object.create overwrites the constructor property so we need to set it back (reseting the constructor)

// Instead we need to copy the Person.prototype to a newly created object using Object.create
//   The first argument will accept what the protype object should be for the newly created object

// Student.prototype.constructor = Student;

// console.log(Person.prototype.constructor);  // [function: Person] 
// console.log(Student.prototype.constructor); // [function: Student] 

// console.log(Person.prototype);   // Person { sayHi: [Function], status: [Function] }
// console.log(Student.prototype);  // Person { sayHi: [Function], status: [Function] }

// There are two steps to prototype inheritance
//   1. seting the prototype to a newly created Object pointing to where you want to inherit from
//   2. reseting the prototype constructor property



      // we want Student to inherit everything from Person so we use Person.apply(this, arguments)

    function Person(firstName, lastName) {
      this.firstName = firstName;
      this.lastName = lastName;
    }

    Person.prototype.sayHi = function() {
      return 'Hi ' + this.firstName + ' ' + this.lastName + '!';
    }

    function Student() {
      Person.apply(this, arguments);
    }

      // however Student does not inherit the Person.prototype (it has its own Student.protytpe that was created with new Student())

      console.log(Person.prototype);  // Person {}
      console.log(Student.prototype); // Student {}

      // so we must assign the Student.prototype to a copy of the Person.prototype, but there is a problem because objects are mutable

      Student.prototype = Person.prototype

      // this now means that if the Student.prototype is changed it will actually be changing the Person.prototype

    // Student.prototype.status = function() {
    //   return "I'm currently a student";
    // }

      console.log(Person.prototype);  // Person { sayHi: [Function], status: [Function] }  
      console.log(Student.prototype); // Person { sayHi: [Function], status: [Function] }  // points to the same object

      // we obviously want Student.prototype to have it's own Object so that it doesn't affect the parent Person.prototype Object
      // to do this we can set Student.prototype to a newley created object instanciated with the Person.prototype properties

    Student.prototype = Object.create(Person.prototype);

      // notice we are using 'Object.create()' instead of 'new Object()' this is because 'new' will create a new prototype object that we don't need

    Student.prototype.status = function() {
      return "I'm currently a student";
    }
      
      // this is still not finished (there are two steps to prototypical inheritance)
      // in the foolowing result notice the assignment of Student.prototype.status now dosen't affect the 'Person.prototype' object

      console.log(Person.prototype);  // Person { sayHi: [Function] }  
      console.log(Student.prototype); // Person { status: [Function] }   // but the Student.prototype is still set to the Person instead of Stduent

  // **************************************************
  // two steps for prototypical inheritance

  // 1. set the functions prototype object to the function that it is inheriting from with 
  //      <childFunction>.prototype = Object.create(<ParentFunction>.prototype)
  // 2. reset the prototype constructor property 
  //      <childFunction>.prototype.constructor = <childFunction>

  //**************************************************
    
    Student.prototype.constructor = Student

      console.log(Person.prototype); // Person { sayHi: [Function] }
      console.log(Student.prototype); // Student { constructor: [Function: Student], status: [Function] }

      // everything is complete
      

    console.log('Person.prototype.__proto__', Person.prototype.__proto__);    // {}
    console.log('Student.prototype.__proto__', Student.prototype.__proto__);  // Person { sayHi: [Function] }

    console.log('--------------------------------------------------'); 

    // it dosen't matter where you set up the prototypical inheritance (before or after the assignment of functions to the parent element)
    // all changes made to the parent prototype object will reflect in child constructor functions

    Person.prototype.walk = function() {
      return this.firstName + ' is now walking';
    }

    let person1 = new Person('nate', 'lipp');
    console.log(person1.walk());

