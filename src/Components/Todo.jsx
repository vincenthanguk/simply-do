import React, { Component } from "react";
import "./Todo.css";

class Todo extends Component {
  render() {
    return (
      <div className="Todo">
        <h2>
          Title: {this.props.title} | Content: {this.props.content} |
          <button>X</button>
        </h2>
      </div>
    );
  }
}

export default Todo;
