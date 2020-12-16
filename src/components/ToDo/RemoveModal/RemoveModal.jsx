import React from 'react'
import { Button, Modal } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck , faTimes } from '@fortawesome/free-solid-svg-icons';


export default function Confirm(props) {
    return (
        <Modal centered show={true} onHide={props.onClose} animation={true}>
            <Modal.Header closeButton>
                <Modal.Title>Are you sure you want to delete this {props.selectedTasksSize} tasks?</Modal.Title>
            </Modal.Header>
            <Modal.Footer>
                <Button variant="primary " onClick={props.onClose}>
                <FontAwesomeIcon icon={faTimes} />
              </Button>
                <Button variant="danger" onClick={props.onSubmit}>
                <FontAwesomeIcon icon={faCheck} />
              </Button>
            </Modal.Footer>
        </Modal>
    );
}
