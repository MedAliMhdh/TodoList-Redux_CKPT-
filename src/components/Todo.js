import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "../App.css";
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
    <div className="body">
      {isEditing ? (
        <div className="editTodo">
          <input
            type="text"
            autoFocus
            onChange={(e) => getInput(e.target.value)}
          />

          <button
            className="confirm"
            onClick={() => dispatch(confirmEdit({ id: id, content: y }))}
          >
            confirm
          </button>
          <button className="cancel" onClick={() => dispatch(cancelEdit(id))}>
            cancel
          </button>
        </div>
      ) : (
        <div className="todoItem">
          <p
            className="todoContent"
            style={{ opacity: !isComplete ? "1" : "0.3" }}
          >
            {content}
          </p>
          <div className="todoButtons">
            <button className="Edit" onClick={() => dispatch(editTodo(id))}>
              Edit
            </button>
            <button className="Done" onClick={() => dispatch(completeTodo(id))}>
              Done
            </button>
            <button
              className="Delete"
              onClick={() => {
                dispatch(deleteTodo(id));
              }}
            >
              Delete
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Todo;
