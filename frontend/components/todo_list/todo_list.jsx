import React from 'react';

const _getListItem = (todo) => (
  <li>{todo.title}</li>
);

export default ({todos}) => (
  <ul>
    {todos.map(todo => _getListItem(todo))}
  </ul>
);
