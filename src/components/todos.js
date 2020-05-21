import React, { Component } from 'react'
import '../css/Form.css'

export default class todos extends Component {

    render() {        
        const todos = this.props.data.map((todo) => {
            return (
                <div key={todo.id}>
                     <ul class="collection with-header">
                    <li class="collection-item">
                    {todo.content}
                    <button onClick={()=>{this.props.removeTodo(todo.id)}} class="secondary-content">
                        <i class="material-icons">Done</i>
                    </button>
                    </li>
                    </ul>
                </div>
            )

        })

        return (
            <div>
                <h2 className="center" classN="collection-header"><h4>Todo's</h4></h2>
                {todos}
            </div>
        )
    }
}




