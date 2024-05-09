import { useState, useEffect } from "react";
import axios from "axios";

const useApartments = () => {
	const [apartments, setApartments] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchApartments = async () => {
			try {
				const response = await axios.get(
					`${process.env.API_URL}/apartments`,
				);
				setApartments(response.data);
				setIsLoading(false);
			} catch (err) {
				setError(err);
				setIsLoading(false);
			}
		};

		fetchApartments();
	}, []);

	return { apartments, isLoading, error };
};

export default useApartments;
