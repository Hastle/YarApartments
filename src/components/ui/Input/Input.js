import React, { forwardRef } from "react";
import "./styles.module.scss";

const Input = forwardRef(({ ...rest }, ref) => {
	return <input ref={ref} {...rest} />;
});

export default Input;
