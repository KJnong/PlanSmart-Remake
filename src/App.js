import React, { Component } from 'react'
import Navbar from "./components/Navbar"
import Todos from "./components/todos"
import TodoForm from "./components/TodoForm"

class App extends Component {
  state = {
    todos: [
    ]
  }

  formInfo = (data)=>{
    console.log(data);
    data.id = Math.random()
    const todosNew = [...this.state.todos, data]
    this.setState({todos: todosNew})
  }

  removeTodo = (id) =>{
    const todos = this.state.todos.filter((todo)=>{
      return todo.id != id
    })

    this.setState({todos})
  }
  render() {
    return (
      <div>
        <Navbar/>
        <br/>
        <TodoForm formInfo ={this.formInfo}/>
        <div className="container">
          <Todos data={this.state.todos} removeTodo = {this.removeTodo}/>
        </div>
      </div>
    )
  }
}

export default App;


