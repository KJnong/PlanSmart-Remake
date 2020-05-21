import React, { Component } from 'react'
import Navbar from "./components/Navbar"
import Todos from "./components/todos"
import TodoForm from "./components/TodoForm"

class App extends Component {
  state = {
    todos: [
      {content:'hello world'},
      {content:'hello world'}
    ]
  }

  formInfo = (data)=>{
    this.setState([...this.state, {todos:data}])
  }
  render() {
    return (
      <div>
        <Navbar/>
        <br/>
        <TodoForm formInfo ={this.formInfo}/>
        <div className="container">
          <Todos data={this.state.todos}/>
        </div>
      </div>
    )
  }
}

export default App;


