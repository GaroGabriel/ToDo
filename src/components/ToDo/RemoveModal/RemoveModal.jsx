import React from 'react'
import { Button, Modal } from 'react-bootstrap';

export default function Confirm(props) {
    return (
        <Modal centered show={true} onHide={props.onClose} animation={false}>
            <Modal.Header closeButton>
                <Modal.Title>Are you sure you want to delete this {props.selectedTasksSize} tasks?</Modal.Title>
            </Modal.Header>
            <Modal.Footer>
                <Button variant="primary " onClick={props.onClose}>
                    No
              </Button>
                <Button variant="danger" onClick={props.onSubmit}>
                    Yes
              </Button>
            </Modal.Footer>
        </Modal>
    );
}

