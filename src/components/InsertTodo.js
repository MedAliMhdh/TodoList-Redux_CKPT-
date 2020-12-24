import React from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../actions/todoActoins";

const InsertTodo = () => {
  const dispatch = useDispatch();
  var y, x;
  const handleCHnageInput = (x) => {
    y = x;
  };

  return (
    <div>
      <input
        type="text"
        value={y}
        onChange={(e) => handleCHnageInput(e.target.value)}
      />
      <button
        onClick={() => {
          dispatch(addTodo(y));
          x = "";
        }}
      >
        Add
      </button>
    </div>
  );
};

export default InsertTodo;
