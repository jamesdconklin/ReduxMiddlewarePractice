import {REQUEST_TODOS,RECEIVE_TODOS} from "../actions/todo_actions";
import {merge} from 'lodash';
import allTodos from './selector'

const _defaultState = {
  "1": {
    id: 1,
    title: "wash car",
    body: "with soap",
    done: false
  },
  "2": {
    id: 2,
    title: "wash dog",
    body: "with shampoo",
    done: true
  },
};

const todosReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  let newState = merge({},state);
  switch (action.type) {
    case RECEIVE_TODOS:
      newState = {};
      action.todos.forEach(
        todo => newState[todo.id] = todo
      );
      return newState;

    default:
      console.log(`Reducer default picked up action ${action.type}`);
      return newState;
  }
};

export default todosReducer;
