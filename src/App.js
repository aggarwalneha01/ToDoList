import React, { Component } from 'react';
import Todos from './Todo';
import AddTodo from './AddTodo';
//import './App.css';

class App extends Component {
  state = {
    todos:[
      {id: 1, content: 'Create ToDo App'},
      {id: 2, content: 'Demo'}
    ],
    isEditing: false
  }
  deleteTodo = (id) => {
    const todos  = this.state.todos.filter(todo => {
      return todo.id !== id
    });
    this.setState({
      todos
    })
    }

    editTodo = (id) => {
        this.setState({
        isEditing: true
      });
      console.log(this.state.isEditing);
      const todos  = this.state.todos.filter(todo => {
        return todo.id !== id
     });
      this.setState({
        todos
      })
    }


  addTodo = (todo) => {
    todo.id = Math.random();
    this.setState(prevState => ({
      todos: [...prevState.todos, todo]
    }))
  }
  render() {
    //const {isEditing} = this.state;
    return (
      <div className="todo-App container">
        <h1 className="center blue-text">Todo List</h1>
        
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} editToDo={this.editTodo} isEditing={this.state.isEditing}/>
        <AddTodo addTodo={this.addTodo}/>
      </div>
    );
  }
}

export default App;
