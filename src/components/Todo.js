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
          <button className="Todo-button">
            <i class="fas fa-edit"></i>
          </button>
          <button
            className="Todo-button"
            onClick={() => this.props.removeTodo(id)}>
            <i class="fas fa-trash"></i>
          </button>
        </div>
      </div>
      // <form className="Todo-edit">
      //   <input></input>
      //   <button>Save</button>
      // </form>
    );
  }
}

export default Todo;
