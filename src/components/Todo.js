import React, { Component } from "react";
import "../css/Todo.css";

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = { task: this.props.todo.task, isEditing: false };
    this.handleEdit = this.handleEdit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleComplete = this.handleComplete.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
  }

  handleEdit() {
    if (!this.props.todo.isComplete) {
      this.setState(state => ({
        isEditing: !state.isEditing
      }));
    }
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.task) {
      this.props.updateTodo(this.props.todo.id, this.state.task);
      this.setState(state => ({
        isEditing: !state.isEditing
      }));
    }
  }

  handleComplete() {
    this.props.completeTodo(this.props.todo.id);
  }

  handleRemove() {
    this.props.removeTodo(this.props.todo.id);
  }

  render() {
    const { task, isComplete } = this.props.todo;
    let result;
    if (this.state.isEditing) {
      result = (
        <div className="Todo">
          <form className="Todo-edit" onSubmit={this.handleSubmit}>
            <input
              name="task"
              value={this.state.task}
              onChange={this.handleChange}></input>
            <button>Save</button>
          </form>
        </div>
      );
    } else {
      result = (
        <div className="Todo">
          <p
            className={isComplete ? "Todo-complete" : ""}
            onClick={this.handleComplete}>
            {task}
          </p>
          <div className="Todo-group">
            <button className="Todo-button" onClick={this.handleEdit}>
              <i className="fas fa-edit"></i>
            </button>
            <button className="Todo-button" onClick={this.handleRemove}>
              <i className="fas fa-trash"></i>
            </button>
          </div>
        </div>
      );
    }
    return <div className="Todo">{result}</div>;
  }
}

export default Todo;
