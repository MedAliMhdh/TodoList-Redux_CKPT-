export const addTodo = (payload) => {
  return {
    type: "ADD_TODO",
    payload,
  };
};

export const editTodo = (payload) => {
  return {
    type: "EDIT_TODO",
    payload,
  };
};

export const confirmEdit = (payload) => {
  return {
    type: "CONFIRM_EDIT",
    payload,
  };
};

export const cancelEdit = (payload) => {
  return {
    type: "CANCEL_EDIT",
    payload,
  };
};

export const deleteTodo = (payload) => {
  return {
    type: "DLETE_TODO",
    payload,
  };
};

export const completeTodo = (payload) => {
  return {
    type: "COMPLETE_TODO",
    payload,
  };
};

export const filterTodos = (payload) => {
  return {
    type: "FILTER_TODOS",
    payload,
  };
};
