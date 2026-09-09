import React, { useState } from "react";
import dataApartments from "../../data/DataApartments";
import CardEdit from "../Card/CardEdit";
import Button from "../ui/Button/Button";
import EditApartmentForm from "./EditApartmentForm";
import Modal from "../ui/Modal/Modal";
import { toast } from "react-hot-toast";

function updateApartment(data) {
	const index = dataApartments.findIndex(
		(apartment) => apartment.id === data.id,
	);
	if (index !== -1) {
		dataApartments[index] = { ...dataApartments[index], ...data };
	} else {
		// Если объект не найден, добавляем новый
		const newId =
			Math.max(...dataApartments.map((apartment) => apartment.id)) + 1;
		dataApartments.push({ ...data, id: newId });
	}
	return [...dataApartments]; // Возвращаем обновленный массив для оптимизации реактивности
}

function Management() {
	const [modalActive, setModalActive] = useState(false);
	const [isAddingNew, setIsAddingNew] = useState(false);

	const handleFormSubmit = (data) => {
		console.log(data);
		updateApartment(data);
		setModalActive(false);
		toast.success(
			isAddingNew ? "Объект добавлен!" : "Изменения применены!",
		);
	};

	return (
		<>
			<div className="flex w-full">
				<div className="mx-auto flex w-full flex-col lg:w-3/4">
					<h1>Управление недвижимостью</h1>
					<div className="my-4 flex items-center justify-between">
						<h2>Всего объектов {dataApartments.length}</h2>
						<Button
							className="primary-button"
							onClick={() => {
								setIsAddingNew(true);
								setModalActive(true);
							}}
						>
							Добавить
						</Button>
					</div>
					<div className="my-4 grid grid-cols-1 gap-4">
						{dataApartments.map((apartment) => (
							<div key={apartment.id}>
								<CardEdit apartment={apartment} />
							</div>
						))}
					</div>
				</div>
			</div>
			<Modal
				active={modalActive}
				setActive={setModalActive}
				title={isAddingNew ? "Добавление" : "Редактирование"}
				body={
					<EditApartmentForm
						isAddingNew={isAddingNew}
						onSubmit={handleFormSubmit}
					/>
				}
			/>
		</>
	);
}

export default Management;
