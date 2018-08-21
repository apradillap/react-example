import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from "./components/Navigation"
import TodoForm from "./components/TodoForm"

import { todos } from './todos.json';
console.log(todos);

class App extends Component {
  constructor() {
    super();
    this.state = {
      title: 'Aplicación de Tareas',
      todos
    };
    this.handleAddTodo = this.handleAddTodo.bind(this);
  }

  handleAddTodo(todo) {
    this.setState({
      todos: [...this.state.todos, todo]
    })
  }

  render() {
    const todos = this.state.todos.map((todo, i) => {
      return (
        <div className="card mt-4 ml-2">
          <div className="card-header">
            <h3>{ todo.title }</h3>
            <span className="badge badge-pill badge-danger ml-2">
             { todo.priority }
            </span>
          </div>
          <div className="card-body">
            <p>{ todo.description }</p>
            <p>{ todo.responsible }</p>
          </div>
        </div>
      )
    })

    console.log(todos);
    console.log('Antes de renderizar el componente')
    return (
      <div className="App">
        <Navigation title={ this.state.title } todosSize={ this.state.todos.length }/>

        <div className="container">
          <div className="row mt-4">
            <div className="col-md-4 text-center">
                <img src={logo} className="App-logo" alt="logo" />
              <TodoForm onAddTodo={this.handleAddTodo}/>
            </div>

            <div className="col-md-8">
              <div className="row">
                {todos}
              </div>
            </div>
          </div>
        </div>

        <img src={logo} className="App-logo" alt="logo" />
      </div>
    );
  }
}

export default App;
