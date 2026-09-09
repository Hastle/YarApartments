import React from "react";
import { useForm } from "react-hook-form";
import Input from "../ui/Input/Input";
import Checkbox from "../ui/Checkbox/Checkbox";
import DataAreaList from "../../data/DataAreaList";
import Select from "../ui/Select/Select";
import Button from "../ui/Button/Button";

function EditApartmentForm({ apartment, onSubmit }) {
	const { register, handleSubmit } = useForm({
		defaultValues: apartment || {},
	});

	return (
		<form
			className="flex w-[25vw] flex-col space-y-4 p-4"
			onSubmit={handleSubmit((data) => onSubmit(data))}
		>
			<div className="font-bold text-base">Название</div>
			<Input
				type="text"
				placeholder="Название объекта"
				className="bg-white"
				required
				{...register("title")}
			/>
			<div className="font-bold text-base">Цена</div>
			<div className="flex space-x-4">
				<Input
					type="text"
					className="w-1/2"
					placeholder="Цена за сутки"
					required
					{...register("priceShort")}
				/>
				<Input
					type="text"
					className="w-1/2"
					placeholder="Цена за месяц"
					required
					{...register("price")}
				/>
			</div>
			<div className="font-bold text-base">Адрес</div>
			<Input
				type="text"
				placeholder="Город, улица, дом"
				required
				{...register("address")}
			/>
			<div className="font-bold text-base">Район</div>
			<Select
				className="w-full"
				name="area"
				label={"Выбрать район"}
				{...register("area")}
			>
				{DataAreaList.map((area) => (
					<option key={area.id} value={area.id}>
						{area.name}
					</option>
				))}
			</Select>
			<div className="font-bold text-base">Фото</div>
			<Input type="file" {...register("image")} />
			<div className="font-bold text-base">
				Количество комнат и спальных мест
			</div>
			<div className="flex space-x-4">
				<Input
					type="text"
					className="w-1/2"
					placeholder="Комнаты"
					{...register("room")}
				/>
				<Input
					type="text"
					className="w-1/2"
					placeholder="Спальные места"
					{...register("sleepingPlaces")}
				/>
			</div>
			<div className="font-bold text-base">Площадь</div>
			<div className="flex space-x-4">
				<Input
					type="text"
					className="w-1/2"
					placeholder="Жилая площадь"
					{...register("livingArea")}
				/>
				<Input
					type="text"
					className="w-1/2"
					placeholder="Общая площадь"
					{...register("totalArea")}
				/>
			</div>
			<div className="font-bold text-base">Этажность</div>
			<div className="flex space-x-4">
				<Input
					type="text"
					className="w-1/2"
					placeholder="Этаж"
					{...register("currentFloor")}
				/>
				<Input
					type="text"
					className="w-1/2"
					placeholder="Всего этажей"
					{...register("totalFloors")}
				/>
			</div>
			<div className="font-bold text-base">Мебель</div>
			<Input type="text" placeholder="" {...register("furniture")} />
			<div className="font-bold text-base">Бытовая техника</div>
			<Input type="text" placeholder="" {...register("appliances")} />
			<div className="font-bold text-base">Интернет и телевизор</div>
			<Input type="text" placeholder="" {...register("internetAndTV")} />
			<div className="font-bold text-base">Дополнительно</div>
			<Checkbox
				defaultChecked={apartment?.balcony ?? false}
				label={"Балкон"}
				name="balcony"
				register={register}
			/>
			<Checkbox
				defaultChecked={apartment?.noDeposit ?? false}
				label={"Без залога"}
				name="noDeposit"
				register={register}
			/>
			<Checkbox
				defaultChecked={apartment?.pets ?? false}
				label={"С животными"}
				name="pets"
				register={register}
			/>
			<div className="font-bold text-base">Описание</div>
			<textarea placeholder="Описание" {...register("description")} />
			<Button type="submit" className="primary-button ml-auto">
				Сохранить
			</Button>
		</form>
	);
}

export default EditApartmentForm;
