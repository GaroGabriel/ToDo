import React from 'react';
import './Task.css';

function Task(props) {
    return (
        <div className='task' key={props.index}>
            <span>{props.index + 1}.</span><p>{props.task}</p>
        </div>
    )
}

export default Task
