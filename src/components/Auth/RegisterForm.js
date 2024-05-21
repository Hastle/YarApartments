import React from "react";
import { useForm } from "react-hook-form";
import Input from "../ui/Input/Input";
import Button from "../ui/Button/Button";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const RegisterForm = () => {
	const { register, handleSubmit, reset } = useForm();
	const { authenticate, isLoading, isError, error } = useAuth();
	const navigate = useNavigate();

	const onSubmit = async (data) => {
		try {
			await authenticate.mutateAsync({ userData: data, isLogin: false });
			reset();
			navigate("/signin");
		} catch (error) {
			console.error("Registration failed:", error);
		}
	};

	return (
		<div className="w-full p-3 lg:w-1/3">
			<form onSubmit={handleSubmit(onSubmit)}>
				<div className="grid gap-4">
					<h1 className="my-4">Регистрация</h1>
					<Input
						type="text"
						placeholder="Имя пользователя"
						required
						{...register("userName")}
					/>
					<Input
						type="email"
						placeholder="Email"
						required
						{...register("email")}
					/>
					<Input
						type="password"
						placeholder="Пароль"
						required
						{...register("password")}
					/>
					<Button
						type="submit"
						className="primary-button mt-4"
						disabled={isLoading}
					>
						{isLoading ? "Регистрация..." : "Зарегистрироваться"}
					</Button>
					{isError && (
						<p className="mt-2 text-red-500">
							Ошибка: {error.message}
						</p>
					)}
				</div>
			</form>
		</div>
	);
};

export default RegisterForm;
