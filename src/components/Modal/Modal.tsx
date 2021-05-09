import React, { useRef } from "react";

import "./Modal.css";

interface ModalProps {
    title: string;
    isOpen: boolean;
    onClose: () => void
}

const Modal: React.FC<ModalProps> = ({ title, isOpen, onClose, children }) => {
    const outsideRef = useRef(null);
    const handleCloseOnOverlay = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
        if(e.target === outsideRef.current) {
            onClose();
        }
    }
    return isOpen ? (
        <div className="modal">
            <div
            ref={ outsideRef }
            className="modalOverlay"
            onClick={ handleCloseOnOverlay } />
            <div className="modalBox">
                <button className="modalClose" onClick={ onClose }>X</button>
                <div className="modalTitle">
                    { title }
                </div>
                <div className="modalContent">
                    { children }
                </div>
            </div>
        </div>
    ) : null;
}

export default Modal;