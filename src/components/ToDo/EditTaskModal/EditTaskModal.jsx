import React, { Component } from 'react'
import { Button, Modal } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
import './editTaskModal.css'


export default class EditTaskModal extends Component {
	constructor(props) {
		super(props)
		this.state = {
			...props.data
		}

	}
	handleChange = (event) => {
		this.setState({
			text: event.target.value
		})
	}
	handleSave = () => {
		const { text } = this.state;

		if (!text) {
			return
		}
		this.props.onSave(this.state)
	}

	render() {
		const { text } = this.state
		const { props } = this;

		return (
			<Modal
				centered show={true}
				onHide={props.onClose}
				animation={true}>
				<Modal.Header closeButton>
					<Modal.Title text='center'>Edit {props.count} Tasks?</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<input
						type="text"
						className='input'
						value={text}
						onChange={this.handleChange} />
				</Modal.Body>
				<Modal.Footer>
					<Button
						variant="primary "
						onClick={props.onClose}>
						<FontAwesomeIcon icon={faTimes} />
					</Button>
					<Button
						variant="danger"
						onClick={this.handleSave}>
						<FontAwesomeIcon icon={faCheck} />
					</Button>
				</Modal.Footer>
			</Modal>
		);
	}
}
