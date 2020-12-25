import "./App.css";
import InsertTodo from "./components/InsertTodo";
import Todo from "./components/Todo";
import ListTodo from "./components/ListTodo";
import { useSelector } from "react-redux";

function App() {
  const todos = useSelector((state) => state);

  return (
    <div className="App">
      <div className="header">
        <div className="subHeader">
          <InsertTodo />
          <ListTodo />
        </div>
      </div>
      {todos.map((td) => (
        <Todo key={td.id} content={td.content} id={td.id} />
      ))}
    </div>
  );
}

export default App;
