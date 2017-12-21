import React, { Component } from 'react';
import './App.css';
import TodoList from './TodoList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    }
  }
  componentWillMount() {
    fetch('/api/todos')
    .then(data => data.json())
    .then(todos => this.setState({todos}));
  }
  render() {
    let text = 'Loading...';
    if (this.state.todos.length > 0) {
      text = this.state.todos.map((todo) => (
        <TodoList key={todo._id} name={todo.name} completed={todo.completed}/>
      ))
    }
    return (
      <div className="App">
        {text}
      </div>
    );
  }
}

export default App;
