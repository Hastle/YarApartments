import React, { createContext, useState, useEffect } from "react";
import { decodeToken } from "../utils/jwtUtil";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
	const [token, setToken] = useState(null);
	const [user, setUser] = useState(null);
	const [role, setRole] = useState(null);

	useEffect(() => {
		const storedToken = localStorage.getItem("token");
		if (storedToken) {
			const decodedToken = decodeToken(storedToken);
			if (decodedToken) {
				setToken(storedToken);
				setUser(decodedToken);
				setRole(decodedToken.roles);
			}
		}

		return () => {
			localStorage.removeItem("token");
		};
	}, []);

	const login = (token) => {
		const decodedToken = decodeToken(token);
		if (decodedToken) {
			setToken(token);
			localStorage.setItem("token", token);
			setUser(decodedToken);
			setRole(decodedToken.roles);
		}
	};

	const logout = () => {
		setToken(null);
		setUser(null);
		setRole(null);
		localStorage.removeItem("token");
	};

	return (
		<AuthContext.Provider value={{ token, user, role, login, logout }}>
			{children}
		</AuthContext.Provider>
	);
};
