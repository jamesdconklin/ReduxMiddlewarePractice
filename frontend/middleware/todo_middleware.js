import {REQUEST_TODOS, RECEIVE_TODOS, receiveTodos} from "../actions/todo_actions";
import {fetchTodos} from "../util/todo_api_util";


const apiMiddleware = store => next => action => {
  const error = (err) => {
    console.log(err);
  };
  const dispatchReceiveTodos = (data) => {
    store.dispatch(receiveTodos(data))
  };
  let result = next(action);
  switch (action.type) {
    case REQUEST_TODOS:
      fetchTodos(dispatchReceiveTodos,error)
      return result;
    default:
      return result;
  };
};

export default apiMiddleware;
