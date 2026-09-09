import React from "react";
import SinglePlacemarkMap from "../Map/SinglePlacemarkMap";

const ApartmentLocation = ({ address, latitude, longitude, location }) => {
	return (
		<div className="flex flex-col space-y-4">
			<h2 className="font-bold text-xl">Расположение</h2>
			<p>{address}</p>
			<SinglePlacemarkMap
				className="h-[400px] w-full"
				center={[latitude, longitude]}
				zoom={15}
				controls={["fullscreenControl"]}
				modules={["control.FullscreenControl"]}
				location={location}
			/>
		</div>
	);
};

export default ApartmentLocation;
