import React from "react";
import "../App.css";
import { useDispatch } from "react-redux";
import { addTodo } from "../actions/todoActoins";

const InsertTodo = () => {
  const dispatch = useDispatch();
  var y;
  const handleCHnageInput = (x) => {
    y = x;
  };

  return (
    <div className="inputTodo">
      <input
        autoFocus
        required
        type="text"
        value={y}
        onChange={(e) => handleCHnageInput(e.target.value)}
      />
      <button
        type="submit"
        onClick={() => {
          dispatch(addTodo(y));
        }}
      >
        Add
      </button>
    </div>
  );
};

export default InsertTodo;
