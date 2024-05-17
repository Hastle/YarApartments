import React, { useEffect } from "react";
import { MdClose } from "react-icons/md";
import ReactDOM from "react-dom";

const Modal = ({ active, setActive, title, body, footer }) => {
	useEffect(() => {
		if (active) {
			document.documentElement.classList.add("overflow-y-hidden");
		}
		return () => {
			document.documentElement.classList.remove("overflow-y-hidden");
		};
	}, [active]);
	if (!active) return null;
	return ReactDOM.createPortal(
		<div
			className={`fixed left-0 top-0 z-[100] h-[100vh] w-[100vw] items-center justify-center bg-black/40 transition-all ${active ? "pointer-events-auto flex opacity-100" : "pointer-events-none hidden opacity-0"}`}
			onClick={() => setActive(false)}
		>
			<div
				className="flex flex-col rounded-lg bg-white p-4  md:w-1/2 lg:w-1/3 "
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
				<div className="flex py-4">{body}</div>
				<div className="flex">{footer}</div>
			</div>
		</div>,
		document.getElementById("modal-root"),
	);
};

export default Modal;
