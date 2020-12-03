import React, { Component } from 'react';
import { Card, Button, Col, Row, InputGroup, FormControl, Container } from 'react-bootstrap';
import './ToDo.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFolderPlus, faTrashAlt } from '@fortawesome/free-solid-svg-icons'


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
        const task = [inputValue, ...this.state.tasks]
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


    render() {

        const { inputValue, tasks } = this.state;
        const task = tasks.map((task, index) => {
            return (

                <Col xl={2} md={3} sm={6} xs={12} className='mt-3' key={index}>
                    <Card>
                        <Card.Body>
                            <Card.Title className='Card__Title'> {index + 1}. {`${task.slice(0, 8)}...`}</Card.Title>
                            <Card.Text>
                                {task}
                            </Card.Text>
                            <Button variant="danger" >
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
                        onKeyDown={this.onKeyPressed}
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