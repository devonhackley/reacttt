import React, { Component } from 'react';
import './App.css';
import TodoInput from './todoInput.js'

var todos = [
  {
    todoTitle: 'My first todo',
    todoResponsible: 'Devon',
    todoDesc: 'My first todo description',
    todoPriority: 'low'
  },
  {
    todoTitle: 'My second todo',
    todoResponsible: 'Jerry',
    todoDesc: 'My second todo description',
    todoPriority: 'medium'
  },
  {
    todoTitle: 'My third todo',
    todoResponsible: 'Devon',
    todoDesc: 'My third todo description',
    todoPriority: 'high'
  },
]

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      todos: todos
    };

    this.handleAddTodo = this.handleAddTodo.bind(this);
  }

  handleRemoveTodo(index){
    this.setState({
      todos: this.state.todos.filter(function(e, i){
        return i !== index;
      })
    })
  }

  handleAddTodo(todo){
    this.setState({
      todos: [...this.state.todos,todo]
    })
  }

  render(){
    return(
      <div className="container">
        <TodoInput onAddTodo={this.handleAddTodo}/>
        <h4>Todo count: <span className="badge">{ this.state.todos.length }</span></h4>

        <ul className="list-group">
          {this.state.todos.map((todo, index) =>
            <li className="list-group-item" key={index}>
              <h4 className="list-group-item-heading">{todo.todoTitle} <small><span className="label label-info">{todo.todoPriority}</span></small></h4>

              <p><span className="glyphicon glyphicon-user"></span>{todo.todoResponsible}</p>
              <p>{todo.todoDesc}</p>

              <button className="btn btn-danger btn-sm" onClick={this.handleRemoveTodo.bind(this, index)}><span className="glyphicon glyphicon-trash"></span> Delete</button>
            </li>
          )}
        </ul>
      </div>

    );
  }
}

export default App;
