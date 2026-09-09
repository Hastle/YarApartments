import React from "react";
import { useForm } from "react-hook-form";
import Input from "../ui/Input/Input";
import Button from "../ui/Button/Button";
import useAuth from "../../hooks/useAuth";
import { toast } from "react-hot-toast";
import Checkbox from "../ui/Checkbox/Checkbox";
import { Link, useNavigate, useLocation } from "react-router-dom";

const LoginForm = () => {
	const { register, handleSubmit, reset } = useForm();
	const { authenticate, isLoading, isError, error } = useAuth();
	const navigate = useNavigate();
	const location = useLocation();

	const onSubmit = async (data) => {
		try {
			await authenticate.mutateAsync({ userData: data, isLogin: true });
			navigate(-1);
			toast.success("Успешная авторизация!");
			reset();
		} catch (error) {
			console.error("Authentication failed:", error);
			toast.error("Ошибка авторизации");
		}
	};

	return (
		<div className="w-full p-3 lg:w-1/3">
			<form onSubmit={handleSubmit(onSubmit)}>
				<div className="grid gap-4">
					<h1 className="my-4">Авторизация</h1>
					<Input
						type="text"
						placeholder="Имя пользователя"
						required
						{...register("userName")}
					/>
					<Input
						type="password"
						placeholder="Пароль"
						required
						{...register("password")}
					/>
					<Checkbox
						label={"Политика конфиденциальности"}
						name="confidential"
						register={register}
						required
						defaultChecked={true}
					/>
					<Button
						type="submit"
						className="primary-button"
						disabled={isLoading}
					>
						{"Войти"}
					</Button>
					<p className="text-center">
						У вас еще нет аккаунта?{" "}
						<Link className="border-b border-black" to="/signup">
							Регистрация
						</Link>
					</p>
				</div>
			</form>
		</div>
	);
};

export default LoginForm;
