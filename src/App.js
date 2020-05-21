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
    
    const todosNew = [...this.state.todos, data]
    this.setState({todos: todosNew})
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


