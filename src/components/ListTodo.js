import React from "react";
import "../App.css";
import { useSelector, useDispatch } from "react-redux";
import { filterTodos } from "../actions/todoActoins";

const ListTodo = () => {
  const dispatch = useDispatch();

  return (
    <div className="listTodo">
      <select
        name="all Todos"
        onChange={(e) => dispatch(filterTodos(e.target.value))}
      >
        <option value="All">All Todos</option>
        <option value="Completed">Completed Tasks </option>
        <option value="Uncompleted">Uncompleted Tasks</option>
      </select>
    </div>
  );
};

export default ListTodo;
