import React, { Component } from "react";
import "./Todo.css";

class Todo extends Component {
  render() {
    return (
      <div className="Todo">
        <h1>
          Todo
          <button>X</button>
        </h1>
      </div>
    );
  }
}

export default Todo;
