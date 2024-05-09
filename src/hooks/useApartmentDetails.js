import { useQuery } from "react-query";
import axios from "axios";

const fetchApartmentDetails = async (id) => {
	const response = await axios.get(`${process.env.API_URL}/apartments/${id}`);
	return response.data;
};

const useApartmentDetails = (id) => {
	const { data, isLoading, error } = useQuery(["apartmentDetails", id], () =>
		fetchApartmentDetails(id),
	);

	return { apartmentDetails: data, isLoading, error };
};

export default useApartmentDetails;
