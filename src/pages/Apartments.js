import React, { useEffect } from "react";
import Filter from "../components/Filter/Filter";
import Card from "../components/Card/Card";
import MultiPlacemarkMap from "../components/Map/MultiPlacemarkMap";
import useFilterApartments from "../hooks/useFilterApartments";
import { useFilter } from "../contexts/FilterContext";

function Apartments() {
	const filteredApartments = useFilterApartments();
	const { resetFilters } = useFilter();

	const locations = filteredApartments.map((apartment) => ({
		coordinates: [apartment.latitude, apartment.longitude],
		hint: apartment.address,
		balloon: `<Link><strong>${apartment.address}</strong><br/>${apartment.priceShort} руб.</Link>`,
	}));

	useEffect(() => {
		resetFilters();
	}, []);

	return (
		<div className="flex w-full flex-col lg:flex-row">
			<div className="w-full p-3 lg:w-1/4">
				<Filter />
			</div>
			<div className="w-full p-3 lg:w-3/4">
				<h1 className="my-4">
					Результаты поиска:{" "}
					<span className="flex w-full sm:inline-flex sm:w-auto">
						найдено {filteredApartments.length} объектов
					</span>
				</h1>
				<div className="my-4 grid grid-cols-1 gap-4 lg:grid-cols-2 xl:grid-cols-3">
					{filteredApartments.map((apartment) => (
						<div key={apartment.id}>
							<Card
								id={apartment.id}
								address={apartment.address}
								priceShort={apartment.priceShort}
								imageUrl={apartment.image[0]}
							/>
						</div>
					))}
				</div>
				<MultiPlacemarkMap
					className="h-[400px] w-full py-3"
					center={[57.622427, 39.887067]}
					zoom={12}
					controls={["fullscreenControl"]}
					modules={["control.FullscreenControl"]}
					locations={locations}
				/>
			</div>
		</div>
	);
}

export default Apartments;
