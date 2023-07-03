// Criando componente funcionais e injetar em App.jsx quando necessário
// Utilização de props
import React from 'react'

const Todo = ({ todo, removeTodo }) => {
  return (
    <div className="todo"> 
    <div className="content">
        <p>{todo.text}</p>
        <p className="category">({todo.category})</p>
    </div>
    <div>
      <button className="complete">Completa</button>
      <button className="remove" onClick={() => removeTodo(todo.id)}>Deleta</button>
    </div>
  </div>
  )
}

export default Todo