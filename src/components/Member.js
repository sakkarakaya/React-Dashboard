
import { useContext, useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import { MembersContext } from "../contexts/MembersContext";
import EditForm from "./EditForm";


const Member = ({ m }) => {

    const { deleteMember } = useContext(MembersContext);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        handleClose();
    }, [m])

    return (
        <>

            <td>{m.name}</td>
            <td>{m.email}</td>
            <td>{m.address}</td>
            <td>{m.phone}</td>
            <td>
                <button onClick={handleShow} className="btn text-warning" data-toggle="modal">
                    <i className="material-icons" data-toggle="tooltip" title="Edit">&#xE254;</i>
                </button>
                <button onClick={() => deleteMember(m.id)} className="btn text-danger" data-toggle="modal">
                    <i className="material-icons" data-toggle="tooltip" title="Delete">&#xE872;</i>
                </button>
            </td>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        Edit Member
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <EditForm member={m} />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={handleClose}>Close</Button>
                </Modal.Footer>
            </Modal>

        </>
    )
}

export default Member
