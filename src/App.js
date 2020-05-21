import React, { Component } from 'react'
import Navbar from "./components/Navbar"
import Todos from "./components/todos"
import TodoForm from "./components/TodoForm"

class App extends Component {
  state = {
    todo: null
  }

  formInfo = (data)=>{
    this.setState({todo:data})
  }
  render() {
    return (
      <div>
        <Navbar/>
        <br/>
        <TodoForm formInfo ={this.formInfo}/>
        <div className="container">
          <Todos data={this.state.todo}/>
        </div>
      </div>
    )
  }
}

export default App;


