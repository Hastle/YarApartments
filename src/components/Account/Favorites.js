import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import DataApartments from "../../data/DataApartments";

function Favorites() {
	const [filteredApartments, setFilteredApartments] = useState([]);

	useEffect(() => {
		const favoriteKeys = Object.keys(localStorage).filter((key) =>
			key.startsWith("favorite_"),
		);
		const favoriteIdList = favoriteKeys.map((key) =>
			key.replace("favorite_", ""),
		);

		const filtered = DataApartments.filter((apartment) =>
			favoriteIdList.includes(apartment.id),
		);

		setFilteredApartments(filtered);
	}, [localStorage]);

	return (
		<div className="flex w-full">
			<div className="mx-auto flex w-full flex-col lg:w-3/4">
				<h1>Избранное</h1>
				{filteredApartments.length === 0 ? (
					<p className="text-center">У вас нет избранных квартир.</p>
				) : (
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
				)}
			</div>
		</div>
	);
}

export default Favorites;
