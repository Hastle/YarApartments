import React from 'react';
import {MdClose} from 'react-icons/md';
import ReactDOM from 'react-dom';
import styles from './styles.module.sass';

const Modal = ({active, setActive, title, body, footer}) =>{
    if (!active)
        return null;
    return ReactDOM.createPortal(
        <div className={active ? `${styles.modal} ${styles.active}` : styles.modal} onClick={() => setActive(false)}>
            <div className={`${styles.modal_content} col-md-4`} onClick={e => e.stopPropagation()}>
                <div className={styles.modal_header}>
                    <button className={styles.close_btn} onClick={() => setActive(false)}><MdClose/></button>
                    <h4>{title}</h4>
                </div>
                <div className={styles.modal_body}>
                    {body}
                </div>
                <div className={styles.modal_footer}>
                    {footer}
                </div>
            </div>
        </div>,
        document.getElementById("modal-root")
    );
};

export default Modal;
