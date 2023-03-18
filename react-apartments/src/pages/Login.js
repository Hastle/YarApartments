import React, { Component } from 'react';
import axios from 'axios';
import { redirect } from 'react-router-dom';

const apiUrl = 'https://cb71-2a00-1fa0-44da-6794-4850-636-8112-c67f.eu.ngrok.io/auth/signup';

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
			<div id="login">
				<div className="container">
					<div className="row">
						<div className="col-md-12">
							<h2>Login</h2>
						</div>
						<div className="col-md-4 offset-md-4">
							<form onSubmit={this.handleSubmit}>
								<input type="text" onChange={this.handleChange}/>
								<input type="password" onChange={this.passChange}/>
								<button className="chief-btn" type="submit">Sign in</button>
							</form>
						</div>	
					</div>
				</div>
			</div>
		);
	}
}