import React, { Component } from "react";
import NewTodoForm from "./NewTodoForm";
import { v4 as uuidv4 } from "uuid";
import Todo from "./Todo";
import "../css/TodoList.css";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = { todos: [] };
    this.updateTodo = this.updateTodo.bind(this);
    this.addTodo = this.addTodo.bind(this);
    this.completeTodo = this.completeTodo.bind(this);
  }

  addTodo(todo) {
    const newTodo = { ...todo, id: uuidv4(), isComplete: false };
    this.setState(state => {
      return {
        todos: [...state.todos, newTodo]
      };
    });
  }

  completeTodo(id) {
    this.setState(state => ({
      todos: state.todos.map(todo => {
        if (todo.id === id) {
          return { ...todo, isComplete: !todo.isComplete };
        } else {
          return todo;
        }
      })
    }));
  }

  updateTodo(id, task) {
    this.setState(state => ({
      todos: state.todos.map(todo => {
        if (todo.id === id) {
          return { ...todo, task: task };
        } else {
          return todo;
        }
      })
    }));
  }

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
            updateTodo={this.updateTodo}
          />
        </li>
      );
    });

    return (
      <div className="TodoList">
        <div className="TodoList-head">
          <h1>Todolist</h1>
          <p>A Simple React Todolist App</p>
          <NewTodoForm addTodo={this.addTodo} />
        </div>
        <ul className="TodoList-list">{todos}</ul>
      </div>
    );
  }
}

export default TodoList;
