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

  const insertTodos = () => {
    return <div className="Texteditor">
      <form>

          <div className="input-control">
            <label htmlFor="name">Name</label>
            <input id='id' name='name' type="text" placeholder='Enter Name'/>
          </div>

          <div className="input-control">
            <label htmlFor="comment">Name</label>
            <textarea id='comment' name='' cols="30" rows="5"></textarea>
          </div>

          <button className="submit-btn">Add Item</button>
        
      </form>
    </div>
  }
  
  return (
    <div>
      {insertTodos()}
      {renderTodos()}
    </div>
  )
}

export default TodoForm