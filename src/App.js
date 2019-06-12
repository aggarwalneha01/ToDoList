import React, { Component } from "react";
import Todos from "./Todo";
import AddTodo from "./AddTodo";

class App extends Component {
  state = {
    todos: [],
    isEditing: false
  };

  componentWillMount(){
    //console.log("test")
    //var test = this.state.todos
    var str = localStorage.getItem("todos");
    const todos = str ? JSON.parse(str) : [];
    console.log(todos);
    this.setState({
      todos
    })
  }

  saveTodo = () => {
    var todos = this.state.todos;
    console.log("bbbbbbbbbbbbbbbbbbbbb");
    var str = JSON.stringify(todos);
    // localStorage.setItem("todos",str);
  }

  getTodo = () => {
    var todos = this.state.todos;
    console.log("aaaaaaaaaaaaaaaaa");
    var str = localStorage.getItem(todos);
    todos =JSON.parse(str);
    if (!todos){
      todos =[];
    }
  }

  //getTodo();

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

  addTodo = async todo => {
    todo.id = Math.random();
    await this.setState(prevState => ({
      todos: [...prevState.todos, todo]
    }));
    // console.log(this.state.todos);
    localStorage.setItem("todos",JSON.stringify(this.state.todos))
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
          saveTodo={this.saveTodo}
          getTodo={this.getTodo}
        />
        <AddTodo addTodo={this.addTodo} />
      </div>
    );
  }
}

export default App;
