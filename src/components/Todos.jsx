import axios from "axios";
import React, { useEffect, useState } from "react";
import TodoItem from "./TodoItem";

function Todos() {
  const [desc, setDesc] = useState("");
  const [todos, setTodos] = useState([]);
  const [showAsendingOrder, setShowAsendingOrder] = useState(false);
  const [showDsendingOrder, setShowDsendingOrder] = useState(false);
  const [sortedDataAS, setSortedDataAS] = useState([]);
  const [sortedDataDS, setSortedDataDS] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5001/todos").then((res) => {
      setTodos(res.data);
    });
    axios.get("http://localhost:5001/todosAsendingOrder").then((res) => {
      setSortedDataAS(res.data);
    });
    axios.get("http://localhost:5001/todosDesendingOrder").then((res) => {
      setSortedDataDS(res.data);
    });
  }, []);

  const addTodo = () => {
    if (desc == "") {
      alert("please enter a valid todo descripction");
    } else {
      axios
        .post("http://localhost:5001/addTodo", {
          desc: desc,
        })
        .then(() => {
          setTodos([...todos, { desc }]);
        });
    }
  };

  return (
    <div className="todoList">
      <div className="todoHeader">
        <h1>todo app</h1>
      </div>
      <div className="inputBtn">
        <input
          type="text"
          placeholder="enter new todo"
          onChange={(e) => {
            setDesc(e.target.value);
          }}
        />
        <button onClick={addTodo}>add todo</button>
      </div>

      <h2>all todos</h2>

      <TodoItem todo={todos} />
      {/* <button
        onClick={() => {
          setShowAsendingOrder(!showAsendingOrder);
        }}
        style={{ marginTop: "10px", width: "200px" }}
        className="todobtn"
      >
        sort Asending
      </button>

      {showAsendingOrder && <TodoItem todo={sortedDataAS} />}

      <button
        onClick={() => {
          setShowDsendingOrder(!showDsendingOrder);
        }}
        style={{ marginTop: "10px", width: "200px" }}
        className="todobtn"
      >
        sort Desending
      </button>
      {showDsendingOrder && <TodoItem todo={sortedDataDS} />} */}
    </div>
  );
}

export default Todos;
