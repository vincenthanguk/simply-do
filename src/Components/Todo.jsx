import React, { Component } from "react";
import "./Todo.css";

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
      todo: this.props.content,
      isClicked: false,
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

  liClicked = () => {
    this.setState({ isClicked: !this.state.isClicked });
  };

  render() {
    let result;
    if (this.state.isEditing) {
      result = (
        <div className="Todo">
          <form className="Todo-edit-form" onSubmit={this.handleUpdate}>
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
        <div className="Todo">
          <li
            className={`Todo-li${this.state.isClicked ? " clicked" : ""}`}
            onClick={this.liClicked}
          >
            {this.props.content}
          </li>
          <div className="Todo-buttons">
            <button onClick={this.toggleForm}>
              <i className="fas fa-pen"></i>
            </button>
            <button onClick={this.handleDelete}>
              <i className="fas fa-trash"></i>
            </button>
          </div>
        </div>
      );
    }

    return result;
  }
}

export default Todo;
