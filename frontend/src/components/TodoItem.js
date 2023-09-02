// ! child class - exported to TodoForm.js
import React from 'react'
import { styled } from 'styled-components'
import document from '../img/document.svg'
import edit from '../img/edit.svg'
import theDelete from '../img/delete.svg'

const TodoItem = ({ todo}) => {
  return (
    <TodoItemStyled>
        <div className="icon-document">
            <img src={document} alt="" />
        </div>
        <div className="text-con">
            <h2>{todo.name}</h2>
            <p>{todo.comment}</p>
        </div>
        <div className="edit">
            <img src={edit} alt="" />
        </div>
        <div className="delete">
            <img src={theDelete} alt="" />
        </div>
    </TodoItemStyled>
  )
}

const TodoItemStyled = styled.div`
    background-color: #4F6877;
    padding: 1rem;
    margin: .8rem 0;
    width: 100%;
    border-radius: 30px;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.25);

    display: flex;
    justify-content: space-between;
`

export default TodoItem