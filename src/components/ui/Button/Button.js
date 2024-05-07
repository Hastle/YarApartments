import React from "react";
import styles from "./styles.module.scss";

function Button({ children, onClick, className = "", ...rest }) {
	return (
		<button
			className={`${styles.primary_button} ${className}`}
			onClick={onClick}
			{...rest}
		>
			{children}
		</button>
	);
}

export default Button;
