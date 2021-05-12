import React, { Component } from "react";
import NewTodoForm from "./NewTodoForm";
import Todo from "./Todo";
import { v4 as uuidv4 } from "uuid";

import "./TodoList.css";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [{ content: "testooo", id: uuidv4(), edit: false }],
    };
  }

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

  updateTodo = (id, updatedTodo) => {
    const updatedTodos = this.state.todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, content: updatedTodo };
      }
      return todo;
    });
    this.setState({ todos: updatedTodos });
  };

  render() {
    const todos = this.state.todos.map((todo) => {
      return (
        <Todo
          key={todo.id}
          id={todo.id}
          content={todo.content}
          handleDelete={this.deleteTodo}
          handleUpdate={this.updateTodo}
        />
      );
    });

    return (
      <div className="TodoList">
        <h1>
          Simply Do <span>A React Todo List App</span>
        </h1>
        <ul>{todos}</ul>

        <NewTodoForm handleSubmit={this.addTodo} />
      </div>
    );
  }
}

export default TodoList;
