import React from "react";
import { useForm } from "react-hook-form";
import Input from "../ui/Input/Input";
import Checkbox from "../ui/Checkbox/Checkbox";
import Button from "../ui/Button/Button";
import DataAreaList from "../../data/DataAreaList";
import Select from "../ui/Select/Select";

function Filter() {
	const { register, handleSubmit } = useForm();

	const onSubmit = (data) => {
		console.log(data);
	};

	return (
		<div className="p-3">
			<form onSubmit={handleSubmit(onSubmit)}>
				<div className="flex justify-between">
					<div className="font-bold text-base">Фильтры</div>
					<button className="font-bold text-base" type="reset">
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
				<div className="flex space-x-4">
					<Select
						name="area"
						label={"Выбрать район"}
						register={register}
						className={"w-full"}
					>
						{DataAreaList.map((area) => (
							<option key={area.id} value={area.id}>
								{area.name}
							</option>
						))}
					</Select>
				</div>
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
				<div className="my-4 font-bold text-base">Дополниaтельно</div>
				<Checkbox
					label={"Без залога"}
					name="additional.noDeposit"
					register={register}
				/>
				<Checkbox
					label={"Без предоплаты"}
					name="additional.noPrepayment"
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
				<Button
					type="submit"
					className={"primary-button mt-4 lg:w-full"}
				>
					Применить фильтры
				</Button>
			</form>
		</div>
	);
}

export default Filter;
