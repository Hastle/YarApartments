import React from "react";

const ApartmentInfo = ({ apartment }) => {
	return (
		<div className="flex flex-col space-y-4">
			<h2 className="font-bold text-xl">О квартире</h2>
			<div className="flex flex-row flex-wrap">
				<div className="w-full md:w-1/2">
					<ul className="flex flex-col">
						<li>Количество комнат: {apartment.room}</li>
						<li>
							Количество спальных мест: {apartment.sleepingPlaces}
						</li>
						<li>Общая площадь: {apartment.totalArea} м²</li>
						<li>Жилая площадь: {apartment.livingArea} м²</li>
						<li>
							Этаж: {apartment.currentFloor} из{" "}
							{apartment.totalFloors}
						</li>
						<li>Балкон: {apartment.balcony ? "есть" : "нет"}</li>
					</ul>
				</div>
				<div className="w-full md:w-1/2">
					<ul className="flex flex-col">
						<li>Мебель: {apartment.furniture}</li>
						<li>Техника: {apartment.appliances}</li>
						<li>Интернет и ТВ: {apartment.internetAndTV}</li>
						<li>
							С животными: {apartment.pets ? "можно" : "нельзя"}
						</li>
						<li>
							Без залога: {apartment.noDeposit ? "да" : "нет"}
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default ApartmentInfo;
