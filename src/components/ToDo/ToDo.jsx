import React, { Component } from 'react';
import { Card, Button, Col, Row, InputGroup, FormControl } from 'react-bootstrap';
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
                        <InputGroup className="mb-3">
                            <FormControl
                                placeholder="Create new task"
                                aria-label="Create new task"
                                aria-describedby="basic-addon2"
                                style={{ outline: 'none' }}
                                value={inputValue}
                                onChange={this.getInputValue}
                            />
                            <InputGroup.Append>
                                <Button
                                    style={{ outline: 'none' }}
                                    variant="outline-secondary"
                                    onClick={this.addTask}
                                >Button</Button>
                            </InputGroup.Append>
                        </InputGroup>


                        <div className='tasks__wrapper'>
                            <Row>


                                {tasks.map((task, index) => {
                                    return (

                                        <Col xl={2} md={3} sm={6} xs={12}>
                                            <Card>
                                                <Card.Body>
                                                    <Card.Title className='Card__Title'> {index + 1} {task}</Card.Title>
                                                    <Card.Text>
                                                        {task}
                                                    </Card.Text>
                                                    <Button variant="primary">X</Button>
                                                </Card.Body>
                                            </Card>

                                        </Col>

                                    )
                                })}
                            </Row>
                        </div>
                    </div>
                </div>
            </div>
        )




    }

}

export default ToDo;