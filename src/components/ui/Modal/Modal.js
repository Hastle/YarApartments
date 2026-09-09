import React, { useEffect } from "react";
import { MdClose } from "react-icons/md";
import ReactDOM from "react-dom";

const Modal = ({ active, setActive, title, body, footer }) => {
	useEffect(() => {
		if (active) {
			document.body.classList.add("overflow-hidden");
		} else {
			document.body.classList.remove("overflow-hidden");
		}
	}, [active]);

	if (!active) return null;

	return ReactDOM.createPortal(
		<div
			className={`fixed left-0 top-0 z-[100] h-[100vh] w-[100vw] items-center justify-center bg-black/40 transition-all ${
				active
					? "pointer-events-auto flex overflow-hidden opacity-100"
					: "pointer-events-none hidden opacity-0"
			}`}
			onClick={() => setActive(false)}
		>
			<div
				className="relative max-h-[80vh] w-auto min-w-[20%] flex-col overflow-y-auto rounded-lg bg-white p-5"
				onClick={(e) => e.stopPropagation()}
			>
				<div className="relative flex justify-center">
					<button
						className="absolute left-0 top-0 flex items-center"
						onClick={() => setActive(false)}
					>
						<MdClose size="20" />
					</button>
					<h1>{title}</h1>
				</div>
				<div className="flex flex-col overflow-y-auto py-4">{body}</div>
				<div className="flex">{footer}</div>
			</div>
		</div>,
		document.getElementById("modal-root"),
	);
};

export default Modal;
