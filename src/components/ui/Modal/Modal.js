import React, { useEffect } from "react";
import { MdClose } from "react-icons/md";
import ReactDOM from "react-dom";
import grid from "../../../styles/grid.module.sass";
import styles from "./styles.module.sass";

const Modal = ({ active, setActive, title, body, footer }) => {
	useEffect(() => {
		if (active) {
			document.documentElement.classList.add(styles.modal_fixed);
		}
		return () => {
			document.documentElement.removeAttribute("class");
		};
	}, [active]);

	if (!active) return null;
	return ReactDOM.createPortal(
		<div
			className={
				active ? `${styles.modal} ${styles.active}` : styles.modal
			}
			onClick={() => setActive(false)}
		>
			<div
				className={`${styles.modal_content} ${grid["col-md-4"]}`}
				onClick={(e) => e.stopPropagation()}
			>
				<div className={styles.modal_header}>
					<button
						className={styles.close_btn}
						onClick={() => setActive(false)}
					>
						<MdClose />
					</button>
					<h3>{title}</h3>
				</div>
				<div className={styles.modal_body}>{body}</div>
				<div className={styles.modal_footer}>{footer}</div>
			</div>
		</div>,
		document.getElementById("modal-root"),
	);
};

export default Modal;