import React from "react";
import styles from "./styles.module.sass";

function Input({ type, placeholder, required }) {
	return (
		<input
			type={type}
			placeholder={placeholder || ""}
			required={required}
		/>
	);
}

export default Input;
