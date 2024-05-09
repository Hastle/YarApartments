import { useQuery } from "react-query";
import axios from "axios";

const fetchApartmentDetails = async (id) => {
	const { data } = await axios.get(`${process.env.API_URL}/apartments/${id}`);
	return data;
};

export const useApartmentDetails = (id) => {
	return useQuery(["apartmentDetails", id], () => fetchApartmentDetails(id));
};
