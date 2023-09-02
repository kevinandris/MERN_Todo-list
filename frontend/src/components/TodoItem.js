// ! child class - exported to TodoForm.js
import React from 'react'
import { styled } from 'styled-components'
import document from '../img/document.svg'
import edit from '../img/edit.svg'
import deleteIcon from '../img/delete.svg'

const TodoItem = ({ todo}) => {
  return (
    <TodoItemStyled>
        <div className="icon-document">
            <img src={document} alt="" />
        </div>

        <div className="text-con">
            <div className="left-text">
                <h3>Task Name</h3>
                <p>{todo.name}</p>
            </div>
            <div className="right-text">
                <h3>Comment</h3>
                <p>{todo.comment}</p>
            </div>
        </div>

        <div className="edit">
            <img src={edit} alt="" />
        </div>

        <div className="delete">
            <img src={deleteIcon} alt="" />
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
    color: #fff;

    &:last-child {
        margin-bottom: 4rem;
    }

    h3 {
        color: #6BBE92;
    }

    .icon-document, .edit, .delete {
        background-color: #fff;
        width: 50px;
        height: 50px;

        border-radius: 50%;

        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.25);
        cursor: pointer;

        img {
            cursor: pointer;
        }
        
    }

    .text-con{
        flex: 3;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        justify-content: space-evenly;
        padding: 0 3rem;

        .right-text {
            flex: 2;
            padding-left: 4rem;
        }
    }

    .edit {
        margin-right: 1rem;
    }
`

export default TodoItem