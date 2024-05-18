import React, { createContext, useState, useEffect } from "react";
import { decodeToken } from "../utils/jwtUtil";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [token, setToken] = useState(null);

	useEffect(() => {
		const storedToken = localStorage.getItem("token");
		if (storedToken) {
			const decodedToken = decodeToken(storedToken);
			if (decodedToken) {
				setToken(storedToken);
				setUser(decodedToken);
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
		}
	};

	const logout = () => {
		setUser(null);
		setToken(null);
		localStorage.removeItem("token");
	};

	return (
		<AuthContext.Provider value={{ user, token, login, logout }}>
			{children}
		</AuthContext.Provider>
	);
};
