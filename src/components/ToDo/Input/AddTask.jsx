import React, { Component } from 'react';
import { Button, InputGroup, FormControl, } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFolderPlus } from '@fortawesome/free-solid-svg-icons'
import './AddTask.css'

export default class AddTask extends Component {
    state = {
        inputValue: ''
    }


    onKeyPressed = (event) => {
        if (event.keyCode === 13) {
            this.addTask()
        }
    }

    addTask = () => {
        const { inputValue } = this.state
        if (!inputValue) {
            return
        }
        this.props.onAdd(inputValue)

        this.setState({
            inputValue: ''
        });
    }


    getInputValue = (event) => {
        this.setState({
            inputValue: event.target.value
        })
    }


    render() {
        const { inputValue } = this.state
        const { disabled } = this.props
        return (
            <InputGroup className="mb-3">
                <FormControl
                    placeholder="Create new task"
                    aria-label="Create new task"
                    aria-describedby="basic-addon2"
                    style={{ outline: 'none' }}
                    value={inputValue}
                    onChange={(event) => this.getInputValue(event)}
                    onKeyDown={(event) => this.onKeyPressed(event)}
                    disabled={disabled}
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
        )
    }
}