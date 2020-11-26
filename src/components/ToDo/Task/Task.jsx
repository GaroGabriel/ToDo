import React from 'react'


function Task() {
    return (
        <div className='task' key={index}>
            <span>{index + 1}.</span><p>{task}</p>
        </div>
    )
}

export default Task
