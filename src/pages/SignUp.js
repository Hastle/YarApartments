import React, { useContext } from "react";
import RegisterForm from "../components/Auth/RegisterForm";
import { AuthContext } from "../contexts/AuthContext";
import { Navigate } from "react-router-dom";
function SignUp() {
	const { user } = useContext(AuthContext);
	if (user) {
		return <Navigate to="/" replace />;
	}
	return (
		<div className="flex w-full items-center justify-center">
			<RegisterForm />
		</div>
	);
}

export default SignUp;
