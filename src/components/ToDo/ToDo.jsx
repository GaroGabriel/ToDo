import React, { Component } from 'react';
import Task from './Task/Task';

import './ToDo.css'


class ToDo extends Component {
    state = {
        tasks: [],
        inputValue: ''
    }


    getInputValue = (event) => {
        this.setState({
            inputValue: event.target.value
        })
    }

    addTask = () => {
        const inputValue = this.state.inputValue
        const newTasks = [...this.state.tasks]

        newTasks.push(inputValue)

        this.setState({
            tasks: newTasks,
            inputValue: '',
        })
    }


    render() {
        const { inputValue, tasks } = this.state;




        return (
            <div className='ToDo__wrapper'>
                <div className='container'>
                    <div className="input__wrapper">
                        <div className='input__and__button'>
                            <input type="text" className='task__input' placeholder='Create new task' value={inputValue} onChange={this.getInputValue} />
                            <button onClick={this.addTask}>Add</button>
                        </div>
                        <div className='tasks__wrapper'>

                            {tasks.map((task, index) => {
                                return (<Task index={index} task={task} />
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