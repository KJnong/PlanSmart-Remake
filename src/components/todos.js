import React, { Component } from 'react'

export default class todos extends Component {
    render() {

        const todos = this.props.data.map((todo) => {
            return (
                <div>
                     <ul class="collection with-header">
                    <li class="collection-item">
                    {todo.content}
                    <a href="#!" class="secondary-content">
                        <i class="material-icons">Done</i>
                    </a>
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




