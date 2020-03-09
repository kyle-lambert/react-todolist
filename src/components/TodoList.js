import React, { Component } from "react";
import NewTodoForm from "./NewTodoForm";
import { v4 as uuidv4 } from "uuid";
import Todo from "./Todo";
import "../css/TodoList.css";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = { todos: [] };
  }

  addTodo = todo => {
    const newTodo = { ...todo, id: uuidv4(), isComplete: false };
    this.setState(state => {
      return {
        todos: [...state.todos, newTodo]
      };
    });
  };

  completeTodo = id => {
    this.setState(state => ({
      todos: state.todos.map(todo => {
        if (todo.id === id) {
          return { ...todo, isComplete: !todo.isComplete };
        } else {
          return todo;
        }
      })
    }));
  };

  removeTodo = id => {
    this.setState(state => ({
      todos: state.todos.filter(todo => todo.id !== id)
    }));
  };

  render() {
    const todos = this.state.todos.map(todo => {
      return (
        <li key={todo.id} className="TodoList-item">
          <Todo
            todo={todo}
            removeTodo={this.removeTodo}
            completeTodo={this.completeTodo}
          />
        </li>
      );
    });
    return (
      <div className="TodoList">
        <h1>Todolist</h1>
        <p>A Simple React Todolist App</p>
        <ul className="TodoList-list">{todos}</ul>
        <NewTodoForm addTodo={this.addTodo} />
      </div>
    );
  }
}

export default TodoList;
