import React from "react";
import Filter from "../components/Filter/Filter";
import grid from "../styles/grid.module.sass";

import data from "../data/DataApartments";
import Card from "../components/Card/Card";
function Apartments() {
	return (
		<>
			<div className={`${grid["col-lg-3"]} ${grid["col-md-12"]}`}>
				<Filter />
			</div>
			<div className={`${grid["col-lg-9"]} ${grid["col-md-12"]}`}>
				<h2>Результаты поиска</h2>
				<div className={`${grid["row"]}`}>
					{data.map((apartment) => (
						<div
							key={apartment.id}
							className={`${grid["col-md-4"]}`}
						>
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
