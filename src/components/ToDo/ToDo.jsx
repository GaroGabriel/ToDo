import React, { Component } from 'react';
import { Card, Button, Col, Row, InputGroup, FormControl, Container } from 'react-bootstrap';
import './ToDo.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFolderPlus, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import idGenerator from './idGenerator'

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

        const newTask = {
            text: inputValue,
            _id: idGenerator()
        }
        const task = [newTask, ...this.state.tasks]
        if (inputValue) {
            this.setState({
                tasks: task,
                inputValue: '',
            })
        }

    }


    onKeyPressed = (event) => {
        if (event.keyCode == 13) {
            this.addTask()
        }
    }

    handleDelete = (taskId) => {
        const newTasks = this.state.tasks.filter(task => task._id !== taskId)
        this.setState({
            tasks: newTasks
        })
    }


    render() {

        const { inputValue, tasks } = this.state;
        const task = tasks.map((task, index) => {
            return (

                <Col xl={2} md={3} sm={6} xs={12} className='mt-3' key={index}>
                    <Card>
                        <Card.Body>
                            <Card.Title className='Card__Title'> {index + 1}. {`${task.text.slice(0, 8)}...`}</Card.Title>
                            <Card.Text>
                                {task.text}
                            </Card.Text>
                            <Button variant="danger" onClick={() => this.handleDelete(task._id)}>
                                <FontAwesomeIcon icon={faTrashAlt} />
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>
            )
        })

        return (

            <Container className=" mt-3">
                <InputGroup className="mb-3">
                    <FormControl
                        placeholder="Create new task"
                        aria-label="Create new task"
                        aria-describedby="basic-addon2"
                        style={{ outline: 'none' }}
                        value={inputValue}
                        onChange={this.getInputValue}
                        onKeyDown={(event) => this.onKeyPressed(event)}
                    />
                    <InputGroup.Append>
                        <Button
                            disabled={inputValue == ''}
                            style={{ outline: 'none' }}
                            variant="outline-secondary"
                            onClick={this.addTask}

                        >
                            <FontAwesomeIcon icon={faFolderPlus} />
                        </Button>
                    </InputGroup.Append>
                </InputGroup>

                <Row className='justify-content-center'>
                    {task}
                </Row>
            </Container>

        )

    }

}

export default ToDo;