import React, { Component } from 'react';
import { Button, Col, Row, Container } from 'react-bootstrap';
import './ToDo.css'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faFolderPlus, } from '@fortawesome/free-solid-svg-icons'
import idGenerator from './idGenerator'
import Task from './Task/Task';
import AddTask from './Input/AddTask';
import Confirm from './RemoveModal/RemoveModal';

class ToDo extends Component {

    state = {
        tasks: [],
        selectedTasks: new Set(),
        toggle: false
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




    addTask = (value) => {
        const newTask = {
            text: value,
            _id: idGenerator()
        }

        const task = [newTask, ...this.state.tasks]


        this.setState({
            tasks: task,
        })


    }




    handleDelete = (taskId) => {
        const newTasks = this.state.tasks.filter(task => task._id !== taskId)
        this.setState({
            tasks: newTasks
        })
    }
    toggleConfirm = () => {
        this.setState({
            toggle: !this.state.toggle
        })
    }

    removeSelected = () => {
        let tasks = [...this.state.tasks]

        this.state.selectedTasks.forEach((id) => {
            tasks = tasks.filter((task) => task._id !== id)
        })
        this.setState({
            tasks,
            selectedTasks: new Set(),
            toggle: false
        })
    }



    render() {

        const { toggle, tasks, selectedTasks } = this.state;
        const task = tasks.map((task, index) => {
            return (

                <Col xl={2} md={3} sm={6} xs={12} className='mt-3' key={index}>
                    <Task
                        data={task}
                        onRemove={this.handleDelete}
                        onCheck={this.hendleCheck}
                        disabled={!!selectedTasks.size}
                        key={task._id}
                    />
                </Col>
            )
        })

        return (
            <div>
                <Container className=" mt-3">
                    <AddTask
                        onAdd={this.addTask}
                        disabled={!!selectedTasks.size}
                    />

                    <Row className='justify-content-center'>
                        {task}
                    </Row>
                    <Button
                        variant="outline-danger"
                        className='mt-3'
                        onClick={this.toggleConfirm}
                        disabled={this.state.selectedTasks.size === 0 ? true : false} >
                        Delete Selected
                </Button>
                </Container>

                {toggle && <Confirm
                    onSubmit={this.removeSelected}
                    onClose={this.toggleConfirm}
                    selectedTasksSize={selectedTasks.size}
                />}

            </div>
        )

    }

}

export default ToDo;