import React from "react";
import { useParams } from "react-router-dom";
import { useApartmentDetails } from "../hooks/useApartmentDetails";

function ApartmentDetails() {
	let { id } = useParams();
	// const { data: apartment, isLoading, error } = useApartmentDetails(id);
	//
	// if (isLoading) return <div>Loading...</div>;
	// if (error) return <div>An error has occurred: {error.message}</div>;
	// if (!apartment) return <div>No data available</div>;

	return (
		<div>
			<h2>Apartment Details Page</h2>
			<p className="text-bold rounded-lg border p-5 shadow-lg">
				Object ID: {id}
			</p>
			{/*<h3>{apartment.title}</h3>*/}
			{/*<p>Price: {apartment.price}</p>*/}
			{/*<p>Address: {apartment.address}</p>*/}
			{/*<img src={apartment.imageUrl} alt={apartment.title} />*/}
		</div>
	);
}

export default ApartmentDetails;
