import React, { Component } from 'react'
import Navbar from "./components/Navbar"
import Todos from "./components/todos"
import TodoForm from "./components/TodoForm"

class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <br/>
        <TodoForm/>
        <div className="container">
          <Todos/>
        </div>
      </div>
    )
  }
}

export default App;


