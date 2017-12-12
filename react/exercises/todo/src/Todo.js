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
          this.setState((prevState, props) => (
            prevState.todos.push(this.state.todoInput)
          ), {todoInput: ''})
          this.setState({todoInput: ''})
        }}>
          <input 
            placeholder="what needs to be done?"
            value={this.state.todoInput}
            onChange={(e) => {
              this.setState({todoInput: e.target.value})
            }}/> 
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
