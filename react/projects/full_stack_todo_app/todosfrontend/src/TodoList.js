import React, { Component } from 'react';

class TodoList extends Component {
  render() {
    const { name, completed } = this.props;
    return <h1>{name}</h1>
  }
}

export default TodoList;
