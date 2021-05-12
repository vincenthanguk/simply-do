import React, { Component } from "react";
import "./Todo.css";

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
      todo: this.props.content,
    };
  }

  handleDelete = () => {
    this.props.handleDelete(this.props.id);
  };

  toggleForm = () => {
    this.setState({
      isEditing: !this.state.isEditing,
    });
  };

  handleUpdate = (e) => {
    e.preventDefault();
    //   take new task data and pass up to parent
    this.props.handleUpdate(this.props.id, this.state.todo);
    this.setState({ isEditing: false });
  };

  handleInput = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    let result;
    if (this.state.isEditing) {
      result = (
        <div>
          <form onSubmit={this.handleUpdate}>
            <input
              type="text"
              value={this.state.todo}
              name="todo"
              onChange={this.handleInput}
            />
            <button>Save</button>
          </form>
        </div>
      );
    } else {
      result = (
        <div>
          <button onClick={this.toggleForm}>Edit</button>
          <button onClick={this.handleDelete}>X</button>
          <li>{this.props.content} </li>
        </div>
      );
    }

    return result;
  }
}

export default Todo;
