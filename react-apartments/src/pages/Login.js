import React from 'react';
import axios from 'axios';
import { redirect } from 'react-router-dom';
import Wrapper from '../components/wrapper/Wrapper';

const apiUrl = 'https://c19c-2a00-1fa0-84f-ee7d-78ec-e285-a87f-e69e.eu.ngrok.io/auth/signin';

export default class Login extends React.Component {
	state = {
		user: ''
	}

	handleChange = event => {
		this.setState({ name: event.target.value });
	}

	passChange = event => {
		this.setState({ password: event.target.value});
	}

	handleSubmit = event => {
		event.preventDefault();

		const user = {
			userName: this.state.name,
			password: this.state.password
		};

		axios.post(apiUrl, user)
			.then(res => {
				//console.log(res);
				console.log(res.data);
			})
	}

	render() {
		return (
			<Wrapper>
				<div id="login">
					<div className="container">
						<div className="row">
							<div className="col-md-12">
								<h2>Вход в личный кабинет</h2>
							</div>
							<div className="col-md-4 offset-md-4">
								<form onSubmit={this.handleSubmit}>
									<input type="text" onChange={this.handleChange}/>
									<input type="password" onChange={this.passChange}/>
									<button className="chief-btn" type="submit">Войти</button>
								</form>
							</div>
						</div>
					</div>
				</div>
			</Wrapper>
		);
	}
}