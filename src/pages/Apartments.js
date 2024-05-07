import React from "react";
import Filter from "../components/Filter/Filter";
import Card from "../components/Card/Card";

import data from "../data/DataApartments";

function Apartments() {
	return (
		<>
			<div className="lg:w-1/4 md:w-full">
				<Filter />
			</div>
			<div className="lg:w-3/4 md:w-full">
				<h1 className="text-xl">Результаты поиска</h1>
				<div className="flex flex-wrap">
					{data.map((apartment) => (
						<div key={apartment.id} className="w-full md:w-1/3 p-3">
							<Card
								address={apartment.address}
								price={apartment.price}
								imageUrl={apartment.imageUrl}
							/>
						</div>
					))}
				</div>
			</div>
		</>
	);
}

export default Apartments;
