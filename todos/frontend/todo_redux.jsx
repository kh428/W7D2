import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import {receiveTodo} from './actions/todo_actions';
import {receiveTodos} from './actions/todo_actions';
import {allTodos} from './reducers/selectors';



document.addEventListener("DOMContentLoaded", function () {
  const store = configureStore();

  // only todos 
  window.store = store;
  window.receiveTodo = receiveTodo;
  window.receiveTodos = receiveTodos;
  window.allTodos = allTodos;

  ReactDOM.render(<Root store={store} />, document.getElementById('root'));

});



