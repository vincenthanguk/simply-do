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
      title: "",
      content: "",
    });
  };

  render() {
    return (
      <div className="NewTodoForm">
        <form>
          <h2>New Todo</h2>
          <label htmlFor="title">Title: </label>
          <input
            name="title"
            type="text"
            onChange={this.handleInput}
            value={this.state.name}
          ></input>
          <label htmlFor="content">Content: </label>
          <input
            name="content"
            type="text"
            onChange={this.handleInput}
            value={this.state.content}
          ></input>
          <button onClick={this.handleSubmit}>Submit!</button>
        </form>
      </div>
    );
  }
}

export default NewTodoForm;
