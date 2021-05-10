import React, { Component } from "react";
import NewTodoForm from "./NewTodoForm";
import Todo from "./Todo";

import "./TodoList.css";

class TodoList extends Component {
  render() {
    return (
      <div className="TodoList">
        <h1>TodoList</h1>
        <Todo />
        <Todo />
        <Todo />
        <NewTodoForm />
      </div>
    );
  }
}

export default TodoList;
