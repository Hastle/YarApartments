import { useQuery } from "react-query";
import axios from "axios";

const fetchCoordinates = async (address) => {
	const apiKey = process.env.API_YANDEX_KEY;
	const geocodeUrl = `https://geocode-maps.yandex.ru/1.x/?apikey=${apiKey}&geocode=${encodeURIComponent(address)}&lang=ru_RU&format=json`;

	const response = await axios.get(geocodeUrl);
	const geoObject =
		response.data.response.GeoObjectCollection.featureMember[0].GeoObject;
	const coords = geoObject.Point.pos.split(" ");
	return {
		latitude: parseFloat(coords[1]),
		longitude: parseFloat(coords[0]),
	};
};

const useGeocoding = (address) => {
	return useQuery(["coordinates", address], () => fetchCoordinates(address));
};

export default useGeocoding;
