import React, { forwardRef } from "react";
import "./styles.scss";

const Input = forwardRef(({ className, ...rest }, ref) => {
	return <input className={className} ref={ref} {...rest} />;
});

export default Input;
