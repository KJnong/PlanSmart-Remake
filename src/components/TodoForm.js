import React, { Component } from 'react'

export default class TodoForm extends Component {
    render() {
        return (
            <div class={"row", "container"}>
                <div class="input-field col s6">
                    <input value="Alvin" id="first_name2" type="text" class="validate" />
                    <label class="active" for="first_name2">Add New Task</label>
                </div>
            </div>
        )
    }
}
