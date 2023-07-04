// Criando componente funcionais e injetar em App.jsx quando necessário
// Utilização de props
import React from 'react'

const Todo = ({ todo, removeTodo, completeTodo }) => {
  return (
    <div className="todo" style={{textDecoration : todo.isCompleted ? "line-through" : ""}}> 
    <div className="content">
        <p>{todo.text}</p>
        <p className="category">({todo.category})</p>
    </div>
    <div>
      <button className="complete" onClick={() => completeTodo(todo.id)}>Completa</button>
      <button className="remove" onClick={() => removeTodo(todo.id)}>Deleta</button>
    </div>
  </div>
  )
}

export default Todo