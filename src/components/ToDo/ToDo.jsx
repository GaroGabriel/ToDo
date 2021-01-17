import React, { Component } from 'react';
import { Button, Col, Row, Container } from 'react-bootstrap';
import './ToDo.css';

import Task from './Task/Task';
import AddTask from './Input/AddTask';
import Confirm from './RemoveModal/RemoveModal';
import EditTaskModal from './EditTaskModal/EditTaskModal';

class ToDo extends Component {

    state = {
        editTask: null,
        tasks: [],
        selectedTasks: new Set(),
        toggle: false,

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




    addTask = (data) => {

        const body = JSON.stringify(data)
        fetch('http://localhost:3001/task', {
            method: 'POST',
            headers: {
                'Content-type': 'aplication/json'
            },
            body
        })
            .then((res) => res.json())
            .then((response) => console.log(response))


        // const newTask = {
        //     text: value,
        // }

        // const task = [newTask, ...this.state.tasks]


        // this.setState({
        //     tasks: task,
        // })


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

    toggleEditModal = (task) => {
        this.setState({
            editTask: task
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

    saveTask = (editedTask) => {
        const tasks = [...this.state.tasks]
        const foundTaskIndex = tasks.findIndex((task) => task._id === editedTask._id)
        tasks[foundTaskIndex] = editedTask

        this.setState({
            tasks,
            editTask: null,

        })
    }

    render() {

        const { toggle, tasks, selectedTasks, editTask } = this.state;
        const task = tasks.map((task, index) => {
            return (

                <Col xl={2} md={3} sm={6} xs={12} className='mt-3' key={index}>
                    <Task
                        data={task}
                        onRemove={this.handleDelete}
                        onCheck={this.hendleCheck}
                        disabled={!!selectedTasks.size}
                        key={task._id}
                        onEdit={() => this.toggleEditModal(task)}
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
                    count={selectedTasks.size}
                />}

                {
                    !!editTask &&
                    <EditTaskModal
                        data={editTask}
                        onSave={this.saveTask}
                        onClose={() => this.toggleEditModal(null)} />
                }

            </div>
        )

    }

}

export default ToDo;

