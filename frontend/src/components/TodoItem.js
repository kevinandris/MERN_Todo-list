import React from 'react'

const TodoItem = ({ todo}) => {
  return (
    <div>
        <h2>{todo.name}</h2>
        <p>{todo.comment}</p>
    </div>
  )
}

export default TodoItem