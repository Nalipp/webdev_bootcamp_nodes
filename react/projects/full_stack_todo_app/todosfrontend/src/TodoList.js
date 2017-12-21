import React, { Component } from 'react';
import TodoItem from './TodoItem';
import TodoForm from './TodoForm';
const APIURL = '/api/todos';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    }
  }
  componentWillMount() {
    this.loadTodos();
  }
  loadTodos() {
    fetch(APIURL)
    .then(res => {
      if(!res.ok) {
        if(res.status >= 400 && res.status <= 500) {
          return res.json().then(data => {
            let err = {errorMessage: data.message};
            throw err;
          })
        } else {
          let err = {errorMessage: 'Server is not responding'};
          throw err;
        }
      }
      return res.json()
    }).then(todos => this.setState({todos}));
  }
  render() {
    const todo = this.state.todos.map((todo) => (
      <TodoItem 
        key={todo._id} 
        name={todo.name} 
        completed={todo.completed} />
    ))
    return (
      <div>
        <h1>Todo List</h1>
        <TodoForm />
        <ul>
          {todo}
        </ul>
      </div>
    );
  }
}

export default TodoList;
