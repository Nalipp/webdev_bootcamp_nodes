import React, { Component } from 'react';

class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
    }
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.setState({inputValue: e.target.value})
  }
  render() {
    return (
      <div>
        <input 
          value={this.state.inputValue}
          onChange={this.handleChange}
          type="text" />
        <button>Add Todo</button>
      </div>
    )
  }
}

export default TodoForm;