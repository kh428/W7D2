import React from 'react';
import TodoForm from '../todo_list/todo_form';

// props 
const ToDoList = ({todos, receiveTodo}) => {
  return (
    <div> 
      <h1> To Do List </h1>
      <ul>
      {todos.map( todo => <li key={todo.id}> Todo: {todo.todo} Title: {todo.title} </li>)}
      </ul>
      <TodoForm receiveTodo={receiveTodo} />
    </div>
  )
}

export default ToDoList;