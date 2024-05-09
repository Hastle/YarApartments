import { useQuery } from "react-query";
import axios from "axios";

const fetchApartments = async () => {
	const response = await axios.get(`${process.env.API_URL}/apartments`);
	return response.data;
};

const useApartments = () => {
	const { data, isLoading, error } = useQuery("apartments", fetchApartments);

	return { apartments: data, isLoading, error };
};

export default useApartments;
