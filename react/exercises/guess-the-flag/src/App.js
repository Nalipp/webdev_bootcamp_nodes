import React, { Component } from 'react';
import earth from './earth.jpg';
import './App.css';
const RAND_COUNT = 4;

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      countries: [],
      randomCountries: [],
      selectedCountry: '',
    }
  }
  componentDidMount() {
    const url = 'https://restcountries.eu/rest/v2/all';

    fetch(url)
      .then(res => res.json())
      .then(countries => this.setState({countries}))
      .then(() => this.setRandomCountries())
      .then(() => this.setSelectedCountry())
  }
  setRandomCountries() {
    let randomCountries = [];
    for (let i = 0; i < RAND_COUNT; i++) {
      let allCountries = this.state.countries;
      let countriesCount = allCountries.length;
      let rand = Math.floor(Math.random(countriesCount) * countriesCount);
      randomCountries.push(allCountries[rand])
      this.setState({randomCountries})
    }
  }
  setSelectedCountry() {
    let rand = Math.floor(Math.random(RAND_COUNT) * RAND_COUNT);
    this.setState({selectedCountry: this.state.countries[rand]});
  }
  render() {
    let text = <p>Loading...</p>
    if (this.state.selectedCountry) {
      // text = '';
      // text = <p>{this.state.selectedCountry.name}</p>
      text = <form>
          <p>Please select your preferred contact method:</p>
          <div>
            <label for="contactChoice1">Email
              <input type="radio" name="contact" value="email" />
            </label>

            <input type="radio" id="contactChoice2"
             name="contact" value="phone" />
            <label for="contactChoice2">Phone</label>

            <input type="radio" id="contactChoice2"
             name="contact" value="phone" />
            <label for="contactChoice2">Phone</label>

            <input type="radio" id="contactChoice3"
             name="contact" value="mail" />
            <label for="contactChoice3">Mail</label>
          </div>
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
    }
    return (
      <div>
        <img id="earth" src={earth} alt="earth" />
        <h1>Guess the flag</h1>
        {text}
      </div>
    );
  }
}

export default App;
