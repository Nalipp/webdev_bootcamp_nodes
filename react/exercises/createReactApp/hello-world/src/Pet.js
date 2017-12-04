import React, { Component } from 'react';
import './Pet.css';
import Hobby from './Hobby.js';

class Pet extends Component {
  render() {
    const listStyle = {fontSize: '1.5em'};
    return (
      <div className="card">
        <h2 className="name">Moxie</h2>
        <img src="https://github.com/tigarcia/Moxie/raw/master/moxie.png" alt="Moxie the cat" />
        <h5 style={{fontSize : '3em', margin : '10px'}}>Hobbies</h5>
        <Hobby />
      </div>
    );
  }
}

export default Pet ;

// import App from './App';
// export default App;
