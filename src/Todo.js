import React from 'react'

const Todos = ({todos, deleteTodo}) => {

    const todoList = todos.length ? (
        todos.map(todo => {
            return (
                <div className="collection-item highlight" key={todo.id}>
                <span className="striped highlight">{todo.content}</span><button className=" right rcard-panel red lighten-4 " onClick={() => {deleteTodo(todo.id)}}>X</button>
                </div>
            )
        })
    ): (
        <p className="center">You have nothing left todo!</p>
    )
    return (
        <div className="todos collection">
        {todoList}
        </div>
    )
}

export default Todos