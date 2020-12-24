import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  deleteTodo,
  editTodo,
  confirmEdit,
  cancelEdit,
  completeTodo,
} from "../actions/todoActoins";

const Todo = ({ content, id }) => {
  const dispatch = useDispatch();

  const isEditing = useSelector(
    (state) => state.find((td) => td.id == id).editing
  );

  const isComplete = useSelector(
    (state) => state.find((td) => td.id == id).isCompleted
  );

  let y;
  const getInput = (x) => {
    y = x;
  };

  return (
    <div>
      {isEditing ? (
        <div>
          <input onChange={(e) => getInput(e.target.value)} />
          <button onClick={() => dispatch(confirmEdit({ id: id, content: y }))}>
            confirm
          </button>
          <button onClick={() => dispatch(cancelEdit(id))}>cancel</button>
        </div>
      ) : (
        <div>
          <p style={{ textDecoration: !isComplete ? "none" : "line-through" }}>
            {content}
          </p>
          <button onClick={() => dispatch(editTodo(id))}> Edit </button>
          <button onClick={() => dispatch(completeTodo(id))}> Done </button>
          <button
            onClick={() => {
              dispatch(deleteTodo(id));
            }}
          >
            Delete
          </button>
        </div>
      )}
    </div>
  );
};

export default Todo;
