import React, { useContext, useEffect, useState } from 'react';
import Member from './Member';
import { MembersContext } from "../contexts/MembersContext";
import { Alert, Button, Modal } from "react-bootstrap"
import AddForm from './AddForm';

const MemberList = () => {

    const { members } = useContext(MembersContext);

    const [show, setShow] = useState(false);
    const [showAlert, setShowAlert] = useState(false);

    const handleAlert = () => {
        setShowAlert(true);
        setTimeout(() => {
            setShowAlert(false);
        }, 2500);
    }

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        handleClose();
        return () => handleAlert();
    }, [members])

    return (
        <>
            <div className="table-title">
                <div className="row">
                    <div className="col-sm-6">
                        <h2>Manage <b>Members</b></h2>
                    </div>
                    <div className="col-sm-6">
                        <Button className="btn btn-success" data-toggle="modal" onClick={handleShow}>
                            <i className="material-icons">&#xE147;</i>
                            <span>Add a New Member</span>
                        </Button>
                    </div>
                </div>
            </div>

            <Alert show={showAlert} variant="success">
                Members updated successfully!
            </Alert>

            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Address</th>
                        <th>Phone</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        members.sort((a, b) => a.name < b.name ? -1 : 1).map((m) => (
                            <tr key={m.id}>
                                <Member m={m} key={m.id} />
                            </tr>
                        ))
                    }

                </tbody>
            </table>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        Add Member
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <AddForm />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={handleClose}>Close</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default MemberList
