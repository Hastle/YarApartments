import React from "react";
import "./styles.scss";

const Select = ({ label, register, name, className = "", ...props }) => {
	return (
		<select
			{...register(name)}
			name={name}
			id={name}
			className={className}
			{...props}
		>
			<option value="">{label}</option>
			{props.children}
		</select>
	);
};

export default Select;
