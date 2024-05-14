import React from "react";
import { Map, Placemark } from "@pbe/react-yandex-maps";
import { FaMapMarkerAlt } from "react-icons/fa";

const YandexMap = ({ className = "", center, zoom, controls, modules }) => {
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
			<Placemark
				defaultGeometry={center}
				options={{
					iconColor: "red",
				}}
			/>
		</Map>
	);
};

export default YandexMap;
