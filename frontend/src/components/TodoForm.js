import React, { useEffect, useState } from 'react'

const TodoForm = () => {
  const link = 'http://localhost:5000/api/v1/crud';
  const [todos, setTodos] = useState([])

  useEffect(() => {
    getTodos();
  }, [])
  
  async function getTodos() {
    const data =await axios.get(link)
    setTodos(data)
  }
  
  return (
    <div>TodoForm</div>
  )
}

export default TodoForm