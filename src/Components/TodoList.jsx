import React, { Component } from "react";
import NewTodoForm from "./NewTodoForm";
import Todo from "./Todo";

import "./TodoList.css";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {
          title: "Test",
          content: "Content",
        },
      ],
      todoToggle: false,
    };
  }

  handleClick = () => {
    this.setState((st) => {
      return { todoToggle: !st.todoToggle };
    });
  };

  render() {
    const todos = this.state.todos.map((todo) => {
      return <Todo title={todo.title} content={todo.content} />;
    });

    return (
      <div className="TodoList">
        <h1>TodoList</h1>
        {todos}
        <button onClick={this.handleClick}>New Todo</button>
        {this.state.todoToggle && <NewTodoForm />}
      </div>
    );
  }
}

export default TodoList;
