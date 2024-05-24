import React from "react";
import { useParams } from "react-router-dom";
import DataApartments from "../data/DataApartments";
import useApartmentDetails from "../hooks/useApartmentDetails";
import Loader from "../components/ui/Loader/Loader";
import apartments from "./Apartments";
import SinglePlacemarkMap from "../components/Map/SinglePlacemarkMap";
import { FaRubleSign } from "react-icons/fa";
import FavoriteButton from "../components/FavoriteButton/FavoriteButton";
import Calendar from "../components/Calendar/Calendar";
import Button from "../components/ui/Button/Button";

function ApartmentDetails() {
	let { id } = useParams();
	// const { data: apartment, isLoading, error } = useApartmentDetails(id);
	//
	// if (isLoading) return <Loader />;
	// if (error) return <div>Произошла ошибка: {error.message}</div>;
	// if (!apartment) return <div>Данные не доступны</div>;

	// <h3>{apartment.title}</h3>
	// <p>Price: {apartment.price}</p>
	// <p>Address: {apartment.address}</p>
	// <img src={apartment.image[0]} alt={apartment.title} />
	const apartment = DataApartments?.[id];

	const location = {
		coordinates: [apartment.latitude, apartment.longitude],
		hint: apartment.address,
		balloon: `<Link><strong>${apartment.address}</strong><br/>${apartment.price} руб.</Link>`,
	};

	return (
		<div className="p-3">
			<h2 className="mb-4 font-bold text-2xl">{apartment.title}</h2>
			<div className="overflow-x-auto md:flex md:flex-col md:overflow-x-hidden">
				<div className="flex h-[300px] max-w-full gap-4 md:grid md:grid-cols-4 md:grid-rows-2 lg:h-[500px]">
					<div className="w-full flex-shrink-0 md:col-span-2 md:row-span-2 md:w-auto">
						{apartment.image.slice(0, 1).map((imageUrl, index) => (
							<img
								key={index}
								src={imageUrl}
								alt={`${apartment.title} ${index + 1}`}
								className="h-full w-full object-cover"
							/>
						))}
					</div>
					{apartment.image.slice(1, 5).map((imageUrl, index) => (
						<div
							key={index}
							className="w-full flex-shrink-0 md:col-span-1 md:row-span-1 md:w-auto"
						>
							<img
								src={imageUrl}
								alt={`${apartment.title} ${index + 2}`}
								className="h-full w-full object-cover"
							/>
						</div>
					))}
				</div>
			</div>
			<div className="flex flex-wrap py-4">
				<div className="flex w-full flex-col space-y-4 lg:w-2/3">
					<div className="flex flex-col space-y-4">
						<h2 className="font-bold text-xl">О квартире</h2>
						<div className="flex flex-row flex-wrap">
							<div className="w-full md:w-1/2">
								<ul className="flex flex-col">
									<li>Количество комнат: {apartment.room}</li>
									<li>
										Количество спальных мест:{" "}
										{apartment.sleepingPlaces}
									</li>
									<li>
										Общая площадь: {apartment.totalArea}
									</li>
									<li>
										Жилая площадь: {apartment.livingArea}
									</li>
									<li>
										Этаж: {apartment.currentFloor} из{" "}
										{apartment.totalFloors}
									</li>
								</ul>
							</div>
							<div className="w-full md:w-1/2">
								<ul className="flex flex-col">
									<li>
										Балкон или лоджия: {apartment.balcony}
									</li>
									<li>Мебель: {apartment.furniture}</li>
									<li>Техника: {apartment.appliances}</li>
									<li>
										Интернет и ТВ: {apartment.internetAndTV}
									</li>
								</ul>
							</div>
						</div>
					</div>

					<div className="flex flex-col space-y-4">
						<h2 className="font-bold text-xl">Расположение</h2>
						<p>{apartment.address}</p>
						<SinglePlacemarkMap
							className="h-[400px] w-full"
							center={[apartment.latitude, apartment.longitude]}
							zoom={15}
							controls={["fullscreenControl"]}
							modules={["control.FullscreenControl"]}
							location={location}
						/>
					</div>
					<div className="flex flex-col space-y-4">
						<h2 className="font-bold text-xl">Описание</h2>
						<p>{apartment.description}</p>
					</div>
				</div>
				<div className="mt-4 flex w-full flex-col lg:mt-0 lg:w-1/3">
					<div className="text-bold flex flex-col space-y-4 rounded-lg border p-5 shadow-lg md:ml-4">
						<div className="font-semi flex items-center justify-between">
							<div className="font-semi flex items-center">
								{apartment.price} <FaRubleSign /> / Месяц
							</div>
							<div className="flex items-center">
								<FavoriteButton />
							</div>
						</div>
						<Calendar />
						<div className="flex">
							<p className="m-0">
								Для получения дополнительной информации о
								бронировании и обсуждения вопросов по заселению,
								рекомендуется связаться с владельцем по
								указанному контактному номеру телефона.
							</p>
						</div>
						<Button className="primary-button">Бронировать</Button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ApartmentDetails;
