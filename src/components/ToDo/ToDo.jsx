import React, { Component } from 'react';
import './ToDo.css'


class ToDo extends Component {
    state = {
        tasks: ['fisrt task', 'second', 'third task']
    }

    render() {
        return (
            <div className='ToDo__wrapper'>
                <div className='container'>
                    <div className="input__wrapper">
                        <div className='input__and__button'>
                            <input type="text" className='task__input' placeholder='Create new task' />
                            <button>Add</button>
                        </div>
                        <div className='tasks__wrapper'>

                            {this.state.tasks.map((task, index) => {
                                return (
                                    <div className='task'>
                                        <p>{task}</p>
                                    </div>
                                )
                            })}

                        </div>
                    </div>
                </div>
            </div>
        )




    }

}

export default ToDo;