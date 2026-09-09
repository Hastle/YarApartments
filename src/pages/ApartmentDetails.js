import React, { useState, useEffect, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import DataApartments from "../data/DataApartments";
import { MdCurrencyRuble } from "react-icons/md";
import FavoriteButton from "../components/FavoriteButton/FavoriteButton";
import ApartmentImages from "../components/Apartment/ApartmentImages";
import ApartmentInfo from "../components/Apartment/ApartmentInfo";
import ApartmentLocation from "../components/Apartment/ApartmentLocation";
import BookingForm from "../components/Apartment/BookingForm";

const ApartmentDetails = () => {
	const { id } = useParams();
	const apartment = DataApartments?.[id];

	const location = {
		coordinates: [apartment.latitude, apartment.longitude],
		hint: apartment.address,
		balloon: `<Link><strong>${apartment.address}</strong><br/>${apartment.priceShort} руб.</Link>`,
	};

	const [selectedRange, setSelectedRange] = useState(null);
	const [totalNights, setTotalNights] = useState(0);

	useEffect(() => {
		if (selectedRange) {
			const startDate = new Date(selectedRange.start);
			const endDate = new Date(selectedRange.end);
			const nightsDifference = Math.ceil(
				(endDate - startDate) / (1000 * 60 * 60 * 24),
			);
			setTotalNights(nightsDifference);
		}
	}, [selectedRange]);

	return (
		<div className="w-full">
			<div className="p-3">
				<h2 className="mb-4 font-bold text-2xl">{apartment.title}</h2>
				<ApartmentImages
					images={apartment.image}
					title={apartment.title}
				/>
				<div className="flex flex-wrap py-4">
					<div className="flex w-full flex-col space-y-4 lg:w-2/3">
						<ApartmentInfo apartment={apartment} />
						<ApartmentLocation
							address={apartment.address}
							latitude={apartment.latitude}
							longitude={apartment.longitude}
							location={location}
						/>
						<div className="flex flex-col space-y-4">
							<h2 className="font-bold text-xl">Описание</h2>
							<p>{apartment.description}</p>
						</div>
					</div>
					<div className="mt-4 flex w-full flex-col lg:mt-0 lg:w-1/3">
						<div className="text-bold flex flex-col space-y-4 rounded-lg border p-5 shadow-lg md:ml-4">
							<div className="font-semi flex items-center justify-between">
								<div className="font-semi flex items-center">
									{apartment.priceShort} <MdCurrencyRuble /> /
									Сутки{" "}
								</div>
								<div className="flex items-center">
									<FavoriteButton id={id} />
								</div>
							</div>
							<BookingForm
								apartment={apartment}
								selectedRange={selectedRange}
								setSelectedRange={setSelectedRange}
								totalNights={totalNights}
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ApartmentDetails;
