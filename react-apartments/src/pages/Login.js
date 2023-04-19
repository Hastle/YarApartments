import React, { useState, useRef } from "react";
import { useNavigate } from 'react-router-dom';
import Wrapper from '../components/wrapper/Wrapper';

import AuthService from "../services/auth.service";

const Login = () => {
	let navigate = useNavigate();

	const form = useRef();
	const checkBtn = useRef();

	const [userName, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [loading, setLoading] = useState(false);
	const [message, setMessage] = useState("");

	const onChangeUsername = (e) => {
		const userName = e.target.value;
		setUsername(userName);
	};

	const onChangePassword = (e) => {
		const password = e.target.value;
		setPassword(password);
	};

	const handleLogin = (e) => {
		e.preventDefault();

		setMessage("");
		setLoading(true);

		if (setPassword !== "" && setUsername !== "") {
			AuthService.login(userName, password).then(
				() => {
					navigate("/profile");
					window.location.reload();
				},
				(error) => {
					const resMessage =
						(error.response &&
							error.response.data &&
							error.response.data.message) ||
						error.message ||
						error.toString();

					setLoading(false);
					setMessage(resMessage);
				}
			);
		} else {
			setLoading(false);
		}
	};

	return (
		<Wrapper>
			<div id="login">
				<div className="container">
					<div className="row">
						<div className="col-md-12">
							<h2>Вход в личный кабинет</h2>
						</div>
						<div className="col-md-4 offset-md-4">
							<form onSubmit={handleLogin}>
								<input
									type="text"
									name="userName"
									value={userName}
									onChange={onChangeUsername}
									required
								/>
								<input
									type="password"
									name="password"
									value={password}
									onChange={onChangePassword}
									required
								/>
								<button className="chief-btn" type="submit">Войти</button>
								{message && (
									<div className="form-group">
										<div className="alert alert-danger" role="alert">
											{message}
										</div>
									</div>
								)}
							</form>
						</div>
					</div>
				</div>
			</div>
		</Wrapper>
	);
}
export default Login;