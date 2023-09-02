import React, { useEffect, useState } from 'react'
import axios from 'axios'
import TodoItem from './TodoItem';

const TodoForm = () => {
  const link = 'http://localhost:5000/api/v1/crud';
  const [todos, setTodos] = useState([])

  useEffect(() => {
    getTodos();
    console.log(todos)
  }, [])
  
  async function getTodos() {
    const data = await axios.get(link)
    setTodos(data.data.crud)
  }

  const renderTodos = () => {
    return todos.map((todo, i) => {
      return <TodoItem key={i} todo={todo} />
    })
  }
  
  return (
    <div>
      {renderTodos()}
    </div>
  )
}

export default TodoForm