import React, { Component } from 'react';
import './App.css';
import PropTypes from 'prop-types';

class Instructors extends Component {
  render() {
    return(
      <li key={this.props.index}>
        <h3>{this.props.name}</h3>
        <h4>Hobbies: {this.props.hobbies.join(", ")}</h4>
      </li>
    )
  }
}

Instructors.propTypes = {
  name: PropTypes.string,
  hobbies: PropTypes.arrayOf(PropTypes.string),
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      instructors: [
        { name: 'Tim', hobbies: ['sailing', 'react']}, 
        { name: 'Matt', hobbies: ['math', 'd3']}, 
        { name: 'Colt', hobbies: ['css', 'hiking']}, 
        { name: 'Elie', hobbies: ['music', 'es2015']}
      ]
    };

    setTimeout(() => {
      const randInst = Math.floor(Math.random() * this.state.instructors.length);                      // get random instructor index
      const randHobby = Math.floor(Math.random() * this.state.instructors[randInst].hobbies.length);   // get random hobby index

      let instructors = this.state.instructors.map((inst, i) => {
        if (i === randInst) {
          const hobbies = [...inst.hobbies];              // make a copy of the hobbies array (same as inst.hobbies.slice())
          inst.hobbies = hobbies.splice(randHobby, 1);       // set the return value of the spliced (removed) element to inst.hobbies
          return {
            name: inst.name,
            hobbies: hobbies,
          }
        } 
        return inst;
      });
      this.setState({instructors})
    }, 2000);

  }

  render() {
    const instructors = this.state.instructors.map((instructor, index) => (
      <Instructors key={index} {...instructor}/>
    ));
    return (
      <div className="App">
        <ul>
          {instructors}
        </ul>
      </div>
    );
  }
}

export default App;


// import React, { Component } from 'react';
// import './App.css';

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       instructors: [
//         { name: 'Tim', hobbies: ['sailing', 'react']}, 
//         { name: 'Matt', hobbies: ['math', 'd3']}, 
//         { name: 'Colt', hobbies: ['css', 'hiking']}, 
//         { name: 'Elie', hobbies: ['music', 'es2015']}
//       ]
//     };

//     setTimeout(() => {
//       const randInst = Math.floor(Math.random() * this.state.instructors.length);                      // get random instructor index
//       const randHobby = Math.floor(Math.random() * this.state.instructors[randInst].hobbies.length);   // get random hobby index

//       const instructors = this.state.instructors.slice();               // makes a copy of the state
//       instructors[randInst] = {...instructors[randInst]}                // use the spread opperator to create a new object of the object you want to mutate 
//       instructors[randInst].hobbies = instructors[randInst].hobbies.slice(); // copy that newly created object
//       instructors[randInst].hobbies.splice(randHobby, 1);               // mutating the copy of the new object will not mutate the original state
//       this.setState({instructors})                                      // set the state without permenantly affecting the original state object
//                                                                         // setState() will also render() the page
//     }, 2000);

//   }

//   render() {
//     const instructors = this.state.instructors.map((instructor, index) => (
//       <li key={index}>
//         <h3>{instructor.name}</h3>
//         <h4>Hobbies: {instructor.hobbies.join(", ")}</h4>
//       </li>
//     ));
//     return (
//       <div className="App">
//         <ul>
//           {instructors}
//         </ul>
//       </div>
//     );
//   }
// }

// export default App;
