import React, { useState } from "react";
import { MdCurrencyRuble } from "react-icons/md";
import Button from "../ui/Button/Button";
import Modal from "../ui/Modal/Modal";
import EditApartmentForm from "../Account/EditApartmentForm";
import { toast } from "react-hot-toast";
import DataApartments from "../../data/DataApartments";

function updateApartment(data) {
	const index = DataApartments.findIndex(
		(apartment) => apartment.id === data.id,
	);
	if (index !== -1) {
		DataApartments[index] = { ...DataApartments[index], ...data };
	}
	return [...DataApartments];
}

function CardEdit({ apartment }) {
	const [modalActive, setModalActive] = useState(false);

	const handleFormSubmit = (data) => {
		console.log(data);
		updateApartment(data);
		setModalActive(false);
		toast.success("Изменения применены!");
	};

	return (
		<>
			<div className="flex">
				<div className="flex w-full overflow-hidden rounded-lg bg-white transition-all hover:shadow-lg">
					<img
						src={apartment.image && apartment.image[0]}
						alt={apartment.address}
						className="h-80 w-1/2 object-cover"
					/>

					<div className="flex w-1/2 flex-col p-4">
						<div className="flex">
							<ul className="flex flex-col">
								<li className="flex items-center">
									{apartment.priceShort}{" "}
									<MdCurrencyRuble className="inline-flex" />{" "}
									/ Сутки
								</li>
								<li>
									{apartment.address}, {apartment.area}
								</li>
								<li>Количество комнат: {apartment.room}</li>
								<li>
									Количество спальных мест:{" "}
									{apartment.sleepingPlaces}
								</li>
								<li>Общая площадь: {apartment.totalArea} м²</li>
								<li>
									Жилая площадь: {apartment.livingArea} м²
								</li>
								<li>
									Этаж: {apartment.currentFloor} из{" "}
									{apartment.totalFloors}
								</li>
								<li>
									Балкон: {apartment.balcony ? "есть" : "нет"}
								</li>
								<li>
									С животными:{" "}
									{apartment.pets ? "можно" : "нельзя"}
								</li>
								<li>
									Без залога:{" "}
									{apartment.noDeposit ? "да" : "нет"}
								</li>
							</ul>
						</div>
						<div className="ml-auto flex space-x-4">
							<Button
								className="danger-button"
								onClick={() => setModalActive(true)}
							>
								Удалить
							</Button>
							<Button
								className="secondary-button"
								onClick={() => setModalActive(true)}
							>
								Редактировать
							</Button>
						</div>
					</div>
				</div>
			</div>
			<Modal
				active={modalActive}
				setActive={setModalActive}
				title={`Редактирование`}
				body={
					<EditApartmentForm
						apartment={apartment}
						updateApartment={updateApartment}
						onSubmit={handleFormSubmit}
					/>
				}
			/>
		</>
	);
}

export default CardEdit;
