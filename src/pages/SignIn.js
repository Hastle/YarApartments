import React, { useContext } from "react";
import LoginForm from "../components/Auth/LoginForm";
import { AuthContext } from "../contexts/AuthContext";
import { Navigate } from "react-router-dom";
function SignIn() {
	const { user } = useContext(AuthContext);
	if (user) {
		return <Navigate to="/" replace />;
	}
	return (
		<div className="flex w-full items-center justify-center">
			<LoginForm />
		</div>
	);
}

export default SignIn;
