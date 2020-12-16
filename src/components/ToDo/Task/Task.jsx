import React, { Component } from 'react';
import { Card, Button, } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt,faPenSquare } from '@fortawesome/free-solid-svg-icons';
import './task.css';

class Task extends Component {
    state = {
        checked: false
    }

    handleCheck = () => {
        this.setState({
            checked: !this.state.checked
        })
        const { onCheck, data } = this.props
        onCheck(data._id)
    }
    render() {
        const task = this.props.data
        const { checked } = this.state
        const { disabled } = this.props
        return (
            <Card className={checked ? 'checked' : ''}>
                <Card.Body>
                    <input
                        type="checkbox"
                        onClick={this.handleCheck}
                        key={task._id} />
                    <Card.Title className='Card__Title '>  {`${task.text.slice(0, 8)}...`}</Card.Title>
                    <Card.Text>
                        {task.text}
                    </Card.Text>
                    <Button
                        className='button'
                        variant="danger"
                        onClick={() => this.props.onRemove(task._id)}
                        disabled={disabled}>
                        <FontAwesomeIcon icon={faTrashAlt} />
                    </Button>
                    <Button
                        className='button'
                        variant="info"
                        onClick={()=>this.props.onEdit(task)}
                        disabled={disabled}>
                        <FontAwesomeIcon icon={faPenSquare} />
                    </Button>
                </Card.Body>
            </Card>

        )
    }
}

export default Task
