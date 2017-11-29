import React, { Component } from 'react';


class TodoInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todoTitle: '',
      todoResponsible: '',
      todoDesc: '',
      todoPriority: 'low'
    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event){
    const target = event.target;
    const value = target.value;
    const name  = target.name;

    this.setState({
      [name] : value
    })
  }

  handleSubmit(event){
    event.preventDefault();
    this.props.onAddTodo(this.state);

    this.setState({
      todoTitle: '',
      todoResponsible: '',
      todoDesc: '',
      todoPriority: 'Lowest'
    });
  }
  render(){
    return(
      <div>
        <h4>Add New Todo</h4>
        <form className="form-horizontal" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="inputTodoTitle" className="col-sm-2 control-label">Title</label>
            <div className="col-sm-10">
              <input      name="todoTitle"
                          type="text"
                          className="form-control"
                          id="inputTodoTitle"
                          value={this.state.todoTitle}
                          onChange={this.handleInputChange}
                          placeholder="Title">
              </input>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="inputTodoResponsible" className="col-sm-2 control-label">Responsible</label>
            <div className="col-sm-10">
              <input    name="todoResponsible"
                        type="text"
                        className="form-control"
                        id="inputTodoResponsible"
                        value={this.state.todoResponsible}
                        onChange={this.handleInputChange}
                        placeholder="Responsible">
              </input>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="inputTodoDesc" className="col-sm-2 control-label">Description</label>
            <div className="col-sm-10">
              <textarea   name="todoDesc"
                          rows="3"
                          className="form-control"
                          id="inputTodoDesc"
                          value={this.state.todoDesc}
                          onChange={this.handleInputChange}>
              </textarea>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="inputTodoPriority" className="col-sm-2 control-label">Priority</label>
            <div className="col-sm-10">
              <select     name="todoPriority"
                          type="text"
                          className="form-control"
                          id="inputTodoPriority"
                          value={this.state.todoPriority}
                          onChange={this.handleInputChange}>
                  <option>Lowest</option>
                  <option>Low</option>
                  <option>Medium</option>
                  <option>High</option>
                  <option>Highest</option>
              </select>
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-offset-2 col-sm-10">
              <button type="submit" className="btn btn-success">Add Todo</button>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default TodoInput;
