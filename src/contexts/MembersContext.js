import { createContext, useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export const MembersContext = createContext();

const MembersContextProvider = (props) => {

    const [members, setMembers] = useState([
        { id: uuidv4(), name: 'X Y', email: 'a@a.com', address: '89 Chiaroscuro Rd, Portland, USA', phone: '(173) 111' },
        { id: uuidv4(), name: 'K L', email: 'b@a.com', address: '90 Chiaroscuro Rd, Portland, USA', phone: '(173) 222' },
        { id: uuidv4(), name: 'M N', email: 'c@a.com', address: '91 Chiaroscuro Rd, Portland, USA', phone: '(173) 333' }
    ])

    const addMember = (name, email, address, phone) => {
        setMembers([...members, { id: uuidv4(), name, email, address, phone }])
    }

    const deleteMember = (id) => {
        setMembers(members.filter(m => m.id !== id))
    }

    const editMember = (id, editedMember) => {
        setMembers(members.map((m) => (m.id === id ? editedMember : m)))
    }

    return (
        <MembersContext.Provider value={{ members, addMember, deleteMember, editMember }}>
            {props.children}
        </MembersContext.Provider>
    )
}

export default MembersContextProvider;
