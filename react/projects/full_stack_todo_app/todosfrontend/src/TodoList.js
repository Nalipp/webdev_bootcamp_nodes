import React, { Component } from 'react';
import TodoItem from './TodoItem';
import TodoForm from './TodoForm';
const APIURL = '/api/todos/';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    }
  this.addTodo = this.addTodo.bind(this);
  }
  componentWillMount() {
    this.loadTodos();
  }
  addTodo(val) {
    fetch(APIURL, {
      method: 'post',
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
      body: JSON.stringify({name: val})
    })
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
    })
    .then(newTodo => this.setState({todos: [...this.state.todos, newTodo]}));
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
  deleteTodo(id) {
    fetch(APIURL + id, {
      method: 'delete',
    })
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
    })
    .then(() => {
      let todos = this.state.todos.filter(todo => todo._id !== id);
      this.setState({todos});
    })
  }
  toggleTodo(todo) {
    fetch(APIURL + todo._id, {
      method: 'put',
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
      body: JSON.stringify({completed: !todo.completed})
    })
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
      return res.json();
    })
    .then(updatedTodo => {
      let todos = this.state.todos.map(todo =>
        (todo._id === updatedTodo._id) 
          ? {...todo, completed: !todo.completed}
          : todo
      );
      this.setState({todos});
    })
  }
  render() {
    const todo = this.state.todos.map((todo) => (
      <TodoItem 
        key={todo._id} 
        {...todo}
        onDelete={this.deleteTodo.bind(this, todo._id)}
        onToggle={this.toggleTodo.bind(this, todo)} />
    ))
    return (
      <div>
        <h1>Todo List</h1>
        <TodoForm addTodo={this.addTodo} />
        <ul>
          {todo}
        </ul>
      </div>
    );
  }
}

export default TodoList;
