import React, { Component } from 'react';
import Todos from './Todo';
import AddTodo from './AddTodo';
//import './App.css';

class App extends Component {
  state = {
    todos:[
      {id: 1, content: 'Create ToDo App'},
      {id: 2, content: 'Demo'}
    ]
  }
  deleteTodo = (id) => {
    const todos  = this.state.todos.filter(todo => {
      return todo.id !== id
    });
    this.setState({
      todos
    })
    
  }
  addTodo = (todo) => {
    todo.id = Math.random();
    let todos = [...this.state.todos, todo];
    this.setState({
      todos
    })
  }
  render() {
    return (
      <div className="todo-App container">
        <h1 className="center blue-text">Todo List</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
        <AddTodo addTodo={this.addTodo}/>
      </div>
    );
  }
}

export default App;
