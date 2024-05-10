import React from "react";
import Filter from "../components/Filter/Filter";
import Card from "../components/Card/Card";
import useApartments from "../hooks/useApartments";
import Loader from "../components/ui/Loader/Loader";
import data from "../data/DataApartments";

function Apartments() {
	// const { apartments, isLoading, error } = useApartments();
	//
	// if (isLoading) return <Loader />;
	// if (error) return <div>Произошла ошибка: {error.message}</div>;
	// if (!apartments) return <div>Данные не доступны</div>;

	return (
		<>
			<div className="w-full lg:w-1/4">
				<Filter />
			</div>
			<div className="md:w-full lg:w-3/4">
				<div className="p-3">
					<h1 className="text-xl">Результаты поиска</h1>
					<div className="grid grid-cols-1 gap-4 lg:grid-cols-2 xl:grid-cols-3">
						{data.map((apartment) => (
							<div key={apartment.id}>
								<Card
									id={apartment.id}
									address={apartment.address}
									price={apartment.price}
									imageUrl={apartment.imageUrl}
								/>
							</div>
						))}
					</div>
				</div>
			</div>
		</>
	);
}

export default Apartments;
