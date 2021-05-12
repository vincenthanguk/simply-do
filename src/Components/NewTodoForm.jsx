import React, { Component } from "react";
import "./NewTodoForm.css";

class NewTodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      content: "",
    };
  }

  handleInput = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.handleSubmit(this.state);
    this.setState({
      content: "",
    });
  };

  render() {
    return (
      <div className="NewTodoForm">
        <form onSubmit={this.handleSubmit}>
          <input
            name="content"
            type="text"
            onChange={this.handleInput}
            value={this.state.content}
            placeholder="...enter todo item"
          ></input>
        </form>
      </div>
    );
  }
}

export default NewTodoForm;
