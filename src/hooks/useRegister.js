import { useMutation } from "react-query";
import axios from "axios";

const useRegister = () => {
	return useMutation(async (userData) => {
		const response = await axios.post(
			`${process.env.API_URL}/auth/signup`,
			userData,
			{
				headers: {
					"Content-Type": "application/json",
				},
			},
		);
		return response.data;
	});
};

export default useRegister;
