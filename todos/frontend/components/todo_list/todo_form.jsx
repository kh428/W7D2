import React from 'react';

class TodoForm extends React.Component {
  constructor(props) { 
    super(props);

    this.state = {
      id: Math.floor(Math.random()*1000000),
      todo: "",
      title: ""
    };

    this.updateTodo = this.updateTodo.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateTitle = this.updateTitle.bind(this);

    }

    updateTodo(e) {
      this.setState({
        todo: e.target.value
      });
    }

    updateTitle(e) {
      this.setState({
        title: e.target.value
      });
    }

    handleSubmit(e) {
        e.preventDefault();

        this.props.receiveTodo(this.state);
        this.setState({
          id: Math.floor(Math.random()*1000000),
          todo: "",
          title: ""
        });
    }

    render() {
      return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="todo"> New Todo:
            <input
              id= "todo"
              type="text"
              value={this.state.todo}
              onChange={this.updateTodo} 
            />
        </label>
        <label htmlFor="todo-title"> Title:
            <input 
              id="todo-title"
              type = "text"
              value = {this.state.title}
              onChange= {this.updateTitle}
            />
        </label>
        <input type="submit" value="Add Todo"/>
      </form>
      );
    }
}

export default TodoForm;