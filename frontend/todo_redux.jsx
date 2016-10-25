import React from 'react';
import ReactDOM from 'react-dom';
import * as todo_utils from "./util/todo_api_util";
import configureStore from './store/store';
import allTodos from './reducers/selector';
import Root from "./components/root";

document.addEventListener("DOMContentLoaded",
  () => {
    let root = document.getElementById("content");
    let store = configureStore();
    ReactDOM.render(
      <Root store={store}/>,
        root
    )
    window.allTodos = allTodos;
    window.todo_utils = todo_utils;
    window.store = store;
  }
);
