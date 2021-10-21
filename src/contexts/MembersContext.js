import { createContext, useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';

export const MembersContext = createContext();

const MembersContextProvider = (props) => {

    const [members, setMembers] = useState([])

    useEffect(() => {
        const members = localStorage.getItem("members")
        setMembers(JSON.parse(members))
    }, [])

    useEffect(() => {
        localStorage.setItem("members", JSON.stringify(members))
    })

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
