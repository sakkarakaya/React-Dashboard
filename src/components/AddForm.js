import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useContext } from 'react';
import { MembersContext } from '../contexts/MembersContext'

const AddForm = () => {
    const { addMember } = useContext(MembersContext);

    const [newMember, setNewMember] = useState({
        name: "", email: "", address: "", phone: ""
    });

    const { name, email, address, phone } = newMember;

    const onInputChange = (e) => {
        setNewMember({ ...newMember, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addMember(name, email, address, phone)
    }

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
                Add member
            </Button>
        </Form>
    )
}

export default AddForm
