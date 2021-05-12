import React, { Component } from "react";
import NewTodoForm from "./NewTodoForm";
import Todo from "./Todo";
import { v4 as uuidv4 } from "uuid";

import "./TodoList.css";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [{ title: "test", content: "testooo", id: uuidv4() }],
      todoToggle: false,
    };
  }

  handleClick = () => {
    this.setState((st) => {
      return { todoToggle: !st.todoToggle };
    });
  };

  addTodo = (todo) => {
    const newTodo = { ...todo, id: uuidv4() };
    this.setState((st) => ({
      todos: [...st.todos, newTodo],
    }));
  };

  deleteTodo = (id) => {
    this.setState((st) => ({
      todos: st.todos.filter((todo) => todo.id !== id),
    }));
  };

  render() {
    const todos = this.state.todos.map((todo) => {
      return (
        <Todo
          key={todo.id}
          id={todo.id}
          title={todo.title}
          content={todo.content}
          handleClick={this.deleteTodo}
        />
      );
    });

    return (
      <div className="TodoList">
        <h1>TodoList</h1>
        {todos}
        <button onClick={this.handleClick}>New Todo</button>
        {this.state.todoToggle && <NewTodoForm handleSubmit={this.addTodo} />}
      </div>
    );
  }
}

export default TodoList;
