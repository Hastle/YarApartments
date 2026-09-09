import React, { forwardRef } from "react";
import styles from "./styles.module.sass";
import { FaCheck } from "react-icons/fa";

const Checkbox = forwardRef(
	(
		{
			className = "",
			label,
			name,
			register,
			disabled,
			required,
			defaultChecked,
		},
		ref,
	) => {
		return (
			<label
				className={`${styles.checkbox_container} ${className} ${
					disabled ? styles.disabled : ""
				}`}
			>
				<input
					type="checkbox"
					ref={ref}
					name={name}
					{...register(name)}
					disabled={disabled}
					required={required}
					defaultChecked={defaultChecked}
					className={styles.checkbox_input}
				/>
				<span className={styles.checkbox_checkmark}>
					<FaCheck />
				</span>
				{label}
			</label>
		);
	},
);

export default Checkbox;
