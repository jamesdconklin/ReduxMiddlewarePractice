const API_TODOS = "api/todos"

const _createTodo = (title, body, done) => {
  let todo = {}
  if (title !== undefined) {
    todo["todo[title]"] = title;
  }
  if (body !== undefined) {
    todo["todo[body]"] = body;
  }
  if (done !== undefined) {
    todo["todo[done]"] = done;
  }
  return todo;
};

export const fetchTodos = (success,error) => {
  $.ajax({
    method: "GET",
    url: API_TODOS,
    success,
    error
  });
};

export const fetchTodo = (id,success,error) => {
  $.ajax({
    method: "GET",
    url: [API_TODOS, id.toString()].join('/'),
    success,
    error
  });
};
export const deleteTodo = (id,success,error) => {
  $.ajax({
    method: "DELETE",
    url: [API_TODOS, id.toString()].join('/'),
    success,
    error
  });
};

export const createTodo = (title, body, done, success,error) => {
  $.ajax({
    method: "POST",
    url: API_TODOS,
    data: _createTodo(title, body, done),
    success,
    error
  });
};

export const updateTodo = (id, title, body, done, success, error) => {
  $.ajax({
    method: "UPDATE",
    url: [API_TODOS, id.toString()].join('/'),
    data: _createTodo(title, body, done),
    success,
    error
  });
};
