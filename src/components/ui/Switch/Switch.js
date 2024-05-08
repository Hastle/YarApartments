import React, { forwardRef } from "react";
import styles from "./styles.module.sass";

const Switch = forwardRef(({ label, checked, disabled, onChange }, ref) => {
	return (
		<label className={styles.switch_wrap}>
			<label
				className={`${styles.switch_container} ${disabled ? styles.disabled : ""}`}
			>
				<input
					type="checkbox"
					ref={ref}
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
});

export default Switch;
