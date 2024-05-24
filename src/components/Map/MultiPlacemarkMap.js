import React from "react";
import { Map, Placemark } from "@pbe/react-yandex-maps";
import markerIcon from "../../assets/images/marker-icon.svg";

const MultiPlacemarkMap = ({
	className = "",
	center,
	zoom,
	controls,
	modules,
	locations,
}) => {
	const renderPlacemarks = () => {
		return locations.map((location, index) => (
			<Placemark
				key={index}
				modules={["geoObject.addon.balloon"]}
				geometry={location.coordinates}
				properties={{
					hintContent: location.hint,
					balloonContent: location.balloon,
				}}
				options={{
					iconLayout: "default#image",
					iconImageHref: markerIcon,
					iconImageSize: [30, 42],
					iconImageOffset: [-15, -42],
					lang: "ru_RU",
				}}
			/>
		));
	};

	return (
		<Map
			className={className}
			defaultState={{
				center,
				zoom,
				controls,
			}}
			modules={modules}
		>
			{renderPlacemarks()}
		</Map>
	);
};

export default MultiPlacemarkMap;
