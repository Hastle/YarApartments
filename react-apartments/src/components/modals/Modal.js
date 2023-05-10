import React from 'react';
import {MdClose} from 'react-icons/md';
import Styles from './modal.sass';
const Modal = ({active, setActive, title, body, footer}) =>{
    return (
        <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
            <div className="modal-content col-md-4" onClick={e => e.stopPropagation()}>
                <div className="modal-header">
                    <button className="close-btn" onClick={() => setActive(false)}><MdClose/></button>
                    <h4>{title}</h4>
                </div>
                <div className="modal-body">
                    {body}
                </div>
                <div className="modal-footer">
                    {footer}
                </div>
            </div>
        </div>
    );
}

export default Modal;