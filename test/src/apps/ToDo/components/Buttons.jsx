import React, { useState } from "react";
import Modal from "react-modal";
import TaskForm from "./TaskForm.jsx"

function ButtonForm() {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            width: '30%', 
            maxHeight: '70vh',
            overflowY: 'auto',
            backgroundColor: '#242424',
        } 
    };

    return (
        <div>
            <button onClick={openModal}>ButtonForm</button>
            <Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={customStyles}>
                <TaskForm />
                <button onClick={closeModal}>Close</button>
            </Modal>
        </div>
    );
}

function ButtonSubmit() {
    return (
        <button>ButtonSubmit</button>
    );
}

export { ButtonForm, ButtonSubmit };
