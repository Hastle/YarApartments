import React from "react";
import { useForm } from "react-hook-form";
import { useFilter } from "../../contexts/FilterContext";
import DataAreaList from "../../data/DataAreaList";
import Input from "../ui/Input/Input";
import Select from "../ui/Select/Select";
import Button from "../ui/Button/Button";
import Checkbox from "../ui/Checkbox/Checkbox";

function Filter() {
	const { register, handleSubmit, reset } = useForm();
	const { updateFilters, resetFilters } = useFilter();

	const onSubmit = (data) => {
		updateFilters(data);
	};

	const handleReset = () => {
		reset();
		resetFilters();
	};

	return (
		<div className="w-full p-3">
			<form onSubmit={handleSubmit(onSubmit)}>
				<div className="flex justify-between">
					<div className="font-bold text-base">Фильтры</div>
					<button
						className="font-bold text-base"
						type="reset"
						onClick={handleReset}
					>
						Сбросить
					</button>
				</div>
				<div className="my-4 font-bold text-base">Цена</div>
				<div className="flex space-x-4">
					<Input
						className={"w-1/2"}
						type="text"
						placeholder="От"
						{...register("priceFrom")}
					/>
					<Input
						className={"w-1/2"}
						type="text"
						placeholder="До"
						{...register("priceTo")}
					/>
				</div>
				<div className="my-4 font-bold text-base">Район</div>
				<Select
					label="Выбрать район"
					register={register("area")}
					name="area"
					className="w-full"
				>
					{DataAreaList.map((area) => (
						<option key={area.id} value={area.name}>
							{area.name}
						</option>
					))}
				</Select>
				<div className="my-4 font-bold text-base">
					Количество комнат
				</div>
				<div className="flex flex-wrap content-evenly">
					{[1, 2, 3, 4].map((index) => (
						<Checkbox
							className="mr-4"
							key={index}
							label={String(index)}
							name={`rooms[${index}]`}
							register={register}
						/>
					))}
				</div>
				<div className="my-4 font-bold text-base">
					Количество спальных мест
				</div>
				<div className="flex flex-wrap content-evenly">
					{[1, 2, 3, 4].map((index) => (
						<Checkbox
							className="mr-4"
							key={index}
							label={String(index)}
							name={`sleepingPlaces[${index}]`}
							register={register}
						/>
					))}
				</div>
				<div className="my-4 font-bold text-base">Дополниaтельно</div>
				<Checkbox
					label={"Без залога"}
					name="additional.noDeposit"
					register={register}
				/>
				<Checkbox
					label={"Балкон"}
					name="additional.balcony"
					register={register}
				/>
				<Checkbox
					label={"С животными"}
					name="additional.pets"
					register={register}
				/>
				<div className="mt-4 flex justify-center">
					<Button
						type="submit"
						className={"primary-button lg:w-full"}
					>
						Применить фильтры
					</Button>
				</div>
			</form>
		</div>
	);
}

export default Filter;
