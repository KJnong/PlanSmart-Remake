import React, { Component } from 'react'

class TodoForm extends Component {
    state = { todo: "" };

    changeHandler = (e) => {
        this.setState({ todo: e.target.value })
    }

    onSubmit = (e) => {
        e.preventDefault();
        const data = this.state.todo
        this.props.formInfo(data)
        
        
    }

    render() {
        return (
            <div class={"row", "container"}>
                <form onSubmit={this.onSubmit} class="input-field col s6">
                    <input onChange={this.changeHandler} id="todo" type="text" class="validate" />
                    <label class="active" for="first_name2">Add New Task</label>
                </form>
            </div>
        )
    }
}

export default TodoForm;
