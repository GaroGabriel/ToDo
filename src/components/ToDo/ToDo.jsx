import React, { Component } from 'react';
import './ToDo.css'


class ToDo extends Component {
    render() {
        return (
            <div className='ToDo__wrapper'>
                <input type="text" placeholder='Create new task' />
                <button>Add</button>
            </div>
        )
    }

}

export default ToDo;