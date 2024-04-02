import React from "react";
import styles from "./styles.module.sass";
import { FaCheck } from "react-icons/fa";

function Checkbox({ label, checked, disabled, onChange }) {
	return (
		<label
			className={`${styles.checkbox_container} ${disabled ? styles.disabled : ""}`}
		>
			<input
				type="checkbox"
				checked={checked}
				disabled={disabled}
				onChange={onChange}
				className={styles.checkbox_input}
			/>
			<span className={styles.checkbox_checkmark}>
				<FaCheck />
			</span>
			{label}
		</label>
	);
}

export default Checkbox;
