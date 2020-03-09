import React, { Component } from "react";
import "../css/Todo.css";

class Todo extends Component {
  render() {
    const { task, id, isComplete } = this.props.todo;
    return (
      <div className="Todo">
        <p
          className={isComplete ? "Todo-complete" : ""}
          onClick={() => this.props.completeTodo(id)}>
          {task}
        </p>
        <div className="Todo-group">
          <button className="Todo-button">Edit</button>
          <button
            className="Todo-button"
            onClick={() => this.props.removeTodo(id)}>
            Remove
          </button>
        </div>
      </div>
    );
  }
}

export default Todo;
