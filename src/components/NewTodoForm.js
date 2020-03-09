import React, { Component } from "react";
import "../css/NewTodoForm.css";

class NewTodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = { task: "" };
  }

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    if (this.state.task) {
      this.props.addTodo(this.state);
      this.setState({ task: "" });
    }
  };

  render() {
    return (
      <form className="NewTodoForm" onSubmit={this.onSubmit}>
        <div className="NewTodoForm-group">
          <label htmlFor="task">Task</label>
          <input
            id="task"
            name="task"
            value={this.state.task}
            onChange={this.onChange}></input>
        </div>
        <button className="NewTodoForm-button">Add Todo</button>
      </form>
    );
  }
}

export default NewTodoForm;
