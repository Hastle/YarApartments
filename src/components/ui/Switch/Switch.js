import React from "react";
import styles from "./styles.module.sass";

function Switch({ label, checked, disabled, onChange }) {
	return (
		<label className={styles.switch_wrap}>
			<label
				className={`${styles.switch_container} ${disabled ? styles.disabled : ""}`}
			>
				<input
					type="checkbox"
					checked={checked}
					disabled={disabled}
					onChange={onChange}
					className={styles.switch_input}
				/>
				<span className={styles.switch_slider}></span>
			</label>
			{label}
		</label>
	);
}

export default Switch;
