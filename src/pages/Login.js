import React from "react";
import { useForm } from "react-hook-form";
import Input from "../components/ui/Input/Input";
import Checkbox from "../components/ui/Checkbox/Checkbox";
import Button from "../components/ui/Button/Button";
import AuthForm from "../components/AuthForm/AuthForm";
function Login() {
	return (
		<div className="flex w-full items-center justify-center">
			<AuthForm />
		</div>
	);
}

export default Login;
