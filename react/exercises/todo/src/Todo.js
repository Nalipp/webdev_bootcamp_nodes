import React, { Component } from 'react';
import './Todo.css';

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoInput : '',
      todos: ['this', 'is', 'here']
    }
  }

  render() {
    const todos = this.state.todos.map((todo, i) => (
      <li key={i}>{todo}</li>
    ))
    return (
      <div className="Todo">
        <form onSubmit={(e) => {
          e.preventDefault();
        }}>
          <input placeholder="what needs to be done?"/> 
          <button>Submit</button>
        </form>
        <ol>
          {todos}
        </ol>
      </div>
    );
  }
}

export default Todo;
