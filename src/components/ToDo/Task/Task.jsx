import React, { Component } from 'react';
import './Task.css';
import { Card, Button, } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

class Task extends Component {
    render() {
        const task = this.props.data

        return (
            <Card>
                <Card.Body>
                    <input
                        type="checkbox"
                        onClick={() => this.props.onCheck(task._id)} />
                    <Card.Title className='Card__Title'>  {`${task.text.slice(0, 8)}...`}</Card.Title>
                    <Card.Text>
                        {task.text}
                    </Card.Text>
                    <Button variant="danger" onClick={() => this.props.onRemove(task._id)}>
                        <FontAwesomeIcon icon={faTrashAlt} />
                    </Button>
                </Card.Body>
            </Card>

        )
    }
}

export default Task
