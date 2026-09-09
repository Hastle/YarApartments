import React from "react";
import "./styles.scss";

const Select = ({
	label,
	register,
	name,
	className = "",
	children,
	...props
}) => {
	return (
		<select
			{...register}
			name={name}
			id={name}
			className={className}
			{...props}
		>
			<option value="">{label}</option>
			{children}
		</select>
	);
};

export default Select;
