import React, { Component } from "react";
import "./Todo.css";

class Todo extends Component {
  handleClick = () => {
    this.props.handleClick(this.props.id);
  };

  render() {
    return (
      <div className="Todo">
        <h2>
          {this.props.title}: {this.props.content}{" "}
          <button onClick={this.handleClick}>X</button>
        </h2>
      </div>
    );
  }
}

export default Todo;
