import React from 'react'

const Todos = ({ todos, deleteTodo, editToDo, updateTodo, switchToListMode, isEditing }) => {
    //console.log(isEditing)
    const todoList = todos.length ? (
        todos.map(todo => {
            return (

                <div className="collection-item highlight" key={todo.id}>
                    <section>
                        {isEditing ? <div>
                            <input type="text" defaultValue={todo.content} onChange={(e) => { updateTodo(todo.id, e.target.value)}}  />
                            <button onClick={switchToListMode}>List View</button>
                        </div> : <form><span className="striped highlight">{todo.content}</span>
                                <button className=" right rcard-panel green lighten-4 " onClick={(e) => { e.preventDefault(); editToDo(todo.id) }}>Edit</button>
                                <button className=" right rcard-panel red lighten-4 " onClick={() => { deleteTodo(todo.id) }}>Del</button>
                            </form>}</section>
                </div>
            )
        })
    ) : (
            <p className="center">You have nothing left todo!</p>
        )
    return (
        <div className="todos collection">
            {todoList}
        </div>
    )
}

export default Todos