import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import Toggle from './Toggle';
import SettingState from './SettingState';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.clockId = setInterval(() => {
      this.tick()
    }, 1000);
  }

  componentWillMount() {
    clearInterval(this.clockId);
  }

  tick() {
    this.setState({date : new Date()})  
  }

  render () {
    return (
      <div>
        <h1>Clock</h1>
        <h3>{this.state.date.toLocaleTimeString()}</h3>
        <Toggle />
        <SettingState />
      </div>
    )
  }
}

ReactDOM.render(<Clock />, document.getElementById('root'));
registerServiceWorker();

