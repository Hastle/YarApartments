import React from "react";
import "./styles.scss";

function Button({ children, onClick, className = "", ...rest }) {
	return (
		<button className={`${className}`} onClick={onClick} {...rest}>
			{children}
		</button>
	);
}

export default Button;
