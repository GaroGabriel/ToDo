import React, { Component } from 'react';
import { Button, Col, Row, InputGroup, FormControl, Container } from 'react-bootstrap';
import './ToDo.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFolderPlus, } from '@fortawesome/free-solid-svg-icons'
import idGenerator from './idGenerator'
import Task from './Task/Task';

class ToDo extends Component {

    state = {
        tasks: [],
        inputValue: '',
        selectedTasks: []
    }
    hendleCheck = (taskId) => {
        const selectedTasks = new Set(this.state.selectedTasks)
        if (selectedTasks.has(taskId)) {
            selectedTasks.delete(taskId)
        } else {
            selectedTasks.add(taskId)
        }

        this.setState({
            selectedTasks
        })

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
        if (event.keyCode === 13) {
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
                    <Task
                        data={task}
                        onRemove={this.handleDelete}
                        onCheck={this.hendleCheck}
                    />
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
                            disabled={inputValue === ''}
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