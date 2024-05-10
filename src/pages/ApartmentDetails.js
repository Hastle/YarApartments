import React from "react";
import { useParams } from "react-router-dom";
import useApartmentDetails from "../hooks/useApartmentDetails";
import Loader from "../components/ui/Loader/Loader";

function ApartmentDetails() {
	let { id } = useParams();
	// const { data: apartment, isLoading, error } = useApartmentDetails(id);
	//
	// if (isLoading) return <Loader />;
	// if (error) return <div>Произошла ошибка: {error.message}</div>;
	// if (!apartment) return <div>Данные не доступны</div>;

	return (
		<div>
			<h2>Apartment Details Page</h2>
			<div className="text-bold rounded-lg border p-5 shadow-lg">
				Object ID: {id}
			</div>
			{/*<h3>{apartment.title}</h3>*/}
			{/*<p>Price: {apartment.price}</p>*/}
			{/*<p>Address: {apartment.address}</p>*/}
			{/*<img src={apartment.imageUrl} alt={apartment.title} />*/}
		</div>
	);
}

export default ApartmentDetails;
