import React, { Component } from 'react'
import '../css/Form.css'

class TodoForm extends Component {
    state = { content: "" };

    changeHandler = (e) => {
        this.setState({ content: e.target.value })
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.formInfo(this.state)
        this.setState({content:""})
    }

    render() {
        return (
            <div class={"row", "container"}>
                <form onSubmit={this.onSubmit} class="input-field col s6">
                    <input onChange={this.changeHandler} id="todo" value={this.state.content} placeholder='Type here' type="text" class="validate" />
                    <label className="active" for="first_name2">Add New Task</label>
                </form>
            </div>
        )
    }
}

export default TodoForm;
