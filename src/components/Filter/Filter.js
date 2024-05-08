import React from "react";
import { useForm } from "react-hook-form";
import Input from "../ui/Input/Input";
import Checkbox from "../ui/Checkbox/Checkbox";
import Button from "../ui/Button/Button";

function Filter() {
	const { register, handleSubmit, reset } = useForm();

	const onSubmit = (data) => {
		console.log(data);
	};

	const handleReset = () => {
		reset({
			priceFrom: "",
			priceTo: "",
			rooms: {
				1: false,
				2: false,
				3: false,
				4: false,
			},
			additional: {
				noDeposit: false,
				noPrepayment: false,
				balcony: false,
				pets: false,
			},
		});
	};

	return (
		<div className="p-3">
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
			<form onSubmit={handleSubmit(onSubmit)}>
				<div className="font-bold text-base">Цена</div>
				<div className="flex flex-wrap">
					<Input
						type="text"
						placeholder="От"
						{...register("priceFrom")}
					/>
					<Input
						type="text"
						placeholder="До"
						{...register("priceTo")}
					/>
				</div>
				<div className="font-bold text-base">Количество комнат</div>
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
				<div className="font-bold text-base">Дополниaтельно</div>
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
				<Button type="submit">Применить фильтры</Button>
			</form>
		</div>
	);
}

export default Filter;
