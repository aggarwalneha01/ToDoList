import React, { Component } from "react";
import Todos from "./Todo";
import AddTodo from "./AddTodo";

class App extends Component {
  state = {
    todos: [{ id: 1, content: "Create ToDo App" }, { id: 2, content: "Demo" }],
    isEditing: false
  };
  deleteTodo = id => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id;
    });
    this.setState({
      todos
    });
  };

  editTodo = id => {
    this.setState({
      isEditing: true
    });
  };

  switchToListMode = () => {
    this.setState({
      isEditing: false
    });
  };

  updateTodo = (idToUpdate, newValue) => {
    const newTodoList = this.state.todos.map(todo => todo.id === idToUpdate ? { id: todo.id, content: newValue } : todo);

    this.setState({
      todos: newTodoList
    });
  };

  addTodo = todo => {
    todo.id = Math.random();
    this.setState(prevState => ({
      todos: [...prevState.todos, todo]
    }));
  };
  render() {
    return (
      <div className="todo-App container">
        <h1 className="center blue-text">Todo List</h1>

        <Todos
          updateTodo={this.updateTodo}
          todos={this.state.todos}
          deleteTodo={this.deleteTodo}
          editToDo={this.editTodo}
          isEditing={this.state.isEditing}
          switchToListMode={this.switchToListMode}
        />
        <AddTodo addTodo={this.addTodo} />
      </div>
    );
  }
}

export default App;
