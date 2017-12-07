import React from 'react';

class SettingState extends React.Component {
  constructor(props) {
    super(props);
    this.state = {counter : 1};
  }

  render() {
    return (
      <h5>
        {this.state.counter}
      </h5>
    );
  }
}

export default SettingState;

