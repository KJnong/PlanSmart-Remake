import React, { Component } from 'react'

class TodoForm extends Component {
    state = { content: "" };

    changeHandler = (e) => {
        this.setState({ content: e.target.value })
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.formInfo(this.state)
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
