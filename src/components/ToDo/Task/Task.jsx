import React, { Component } from 'react';
import './Task.css';
import { Card, Button, Col, Row, InputGroup, FormControl, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFolderPlus, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

class Task extends Component {
    render() {
        const task = this.props.data

        return (
            <Card>
                <Card.Body>
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
