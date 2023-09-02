import React, { useEffect, useState } from 'react'
import axios from 'axios'
import TodoItem from './TodoItem';
import { styled } from 'styled-components';

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
            <input id='id' name='name' type="text" placeholder='Enter Name...'/>
          </div>

          <div className="input-control">
            <textarea id='comment' name='' cols="30" rows="5" placeholder='Task Name...'></textarea>
          </div>

          <button className="submit-btn">Add Item</button>
        
      </form>
    </div>
  }
  
  return (
    <TodoFormStyled>
      {insertTodos()}
      {renderTodos()}
    </TodoFormStyled>
  )
}

const TodoFormStyled = styled.div`
  width: 80%;

  display: flex;
  align-items: center;
  flex-direction: column;

  .Texteditor {
    width: 60%;
    padding-top: 4rem;

    form {
      padding-bottom: 5rem;

      .submit-btn {
        padding: .5rem 1.5rem;
        outline: none;
        cursor: pointer;
        background-color: #6BBE92;
        border: none;
        border-radius: 34px;
        color: #fff;
        filter: drop-shadow(0px 4px 28px rgba(0, 0, 0, 0.25));
      }
    }
  }
`

export default TodoForm