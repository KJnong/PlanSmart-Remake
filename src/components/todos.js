import React, { Component } from 'react'

export default class todos extends Component {
    render() {
        return (
            <div>
                <ul class="collection with-header">
                    <li classN="collection-header"><h4>Todo's</h4></li>
                    <li class="collection-item"><div>Alvin<a href="#!" class="secondary-content"><i class="material-icons">Done</i></a></div></li>
                    <li class="collection-item"><div>Alvin<a href="#!" class="secondary-content"><i class="material-icons">Done</i></a></div></li>
                    <li class="collection-item"><div>Alvin<a href="#!" class="secondary-content"><i class="material-icons">Done</i></a></div></li>
                    <li class="collection-item"><div>Alvin<a href="#!" class="secondary-content"><i class="material-icons">Done</i></a></div></li>
                </ul>
            </div>
        )
    }
}
