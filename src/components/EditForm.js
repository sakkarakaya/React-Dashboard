import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useContext } from 'react';
import { MembersContext } from '../contexts/MembersContext'

const EditForm = ({ member }) => {
    const { editMember } = useContext(MembersContext);

    const [editedMember, setEditedMember] = useState({
        id: (member.id), name: (member.name), email: (member.email), address: (member.address), phone: (member.phone)
    });

    const onInputChange = (e) => {
        setEditedMember({ ...editedMember, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        editMember(id, editedMember)
    }

    const { id, name, email, address, phone } = editedMember;
    //console.log(editedMember)

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
                <Form.Control
                    type="text"
                    name="name"
                    value={name}
                    onChange={e => onInputChange(e)}
                    placeholder="Name *"
                    required
                />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Control
                    type="email"
                    name="email"
                    value={email}
                    onChange={e => onInputChange(e)}
                    placeholder="Email *"
                    required
                />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Control
                    as="textarea"
                    name="address"
                    value={address}
                    onChange={e => onInputChange(e)}
                    placeholder="Address *"
                    required
                />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Control
                    type="text"
                    name="phone"
                    value={phone}
                    onChange={e => onInputChange(e)}
                    placeholder="Phone"
                />
            </Form.Group>
            <Button variant="success" type="submit">
                Edit member
            </Button>
        </Form>
    )
}

export default EditForm;
