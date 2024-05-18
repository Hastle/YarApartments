import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { useMutation } from "react-query";
import axios from "axios";

const useAuth = () => {
	const { login } = useContext(AuthContext);

	const authenticate = useMutation(async ({ userData, isLogin }) => {
		const endpoint = isLogin ? "signin" : "signup";
		const response = await axios.post(
			`${process.env.API_URL}/auth/${endpoint}`,
			userData,
			{
				headers: {
					"Content-Type": "application/json",
				},
			},
		);
		login(response.data.token);
		return response.data;
	});

	return {
		authenticate,
		isLoading: authenticate.isLoading,
		isError: authenticate.isError,
		error: authenticate.error,
	};
};

export default useAuth;
