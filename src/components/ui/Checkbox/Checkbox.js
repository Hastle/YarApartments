import React, { forwardRef } from "react";
import styles from "./styles.module.sass";
import { FaCheck } from "react-icons/fa";

const Checkbox = forwardRef(
	({ className = "", label, name, register, disabled, checked }, ref) => {
		return (
			<label
				className={`${styles.checkbox_container} ${className} ${disabled ? styles.disabled : ""}`}
			>
				<input
					type="checkbox"
					ref={ref}
					name={name}
					{...register(name)}
					disabled={disabled}
					checked={checked}
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

// import React, { forwardRef } from "react";
//
// const Checkbox = forwardRef(({ label, ...rest }, ref) => {
// 	return (
// 		<label>
// 			<input type="checkbox" ref={ref} {...rest} />
// 			{label}
// 		</label>
// 	);
// });
//
// export default Checkbox;
