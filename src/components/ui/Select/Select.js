import React from "react";

const Select = ({ label, register, name, ...props }) => {
	return (
		<select
			{...register(name)}
			name={name}
			id={name}
			className="h-10 rounded-md border border-black px-4 py-2 outline-none focus:outline-none"
			{...props}
		>
			<option value="">{label}</option>
			{props.children}
		</select>
	);
};

export default Select;
