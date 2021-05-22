import React from "react";
import modalCloseIcon from "../../assets/images/modal-close.png";

import "./Modal.css";

interface ModalProps {
    title: string;
    isOpen: boolean;
    onClose: () => void;
}

export const Modal: React.FC<ModalProps> = ({ title, isOpen, onClose, children }) => {
    return( 
        <div className="modal">
            { isOpen ?
                    <div>
                        <div className="modal-overlay" />
                        <div className="modal-box">
                            <div className="modal-close-btn">
                                <img src={ modalCloseIcon } alt="X" />
                            </div>
                            <div className="modal-title">
                                { title }
                            </div>
                            <div className="modal-body">
                                { children }
                            </div>
                        </div>
                    </div>
                : null
            }
        </div>
    );
}