

import React, { Component } from 'react';
import './App.css';

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
  }

  render(){
    return(
      <div className="">

      </div>
    );
  }
}

export default App;
