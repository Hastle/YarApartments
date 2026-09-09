import React, { useState } from "react";
import Input from "../ui/Input/Input";
import Select from "../ui/Select/Select";
import DataAreaList from "../../data/DataAreaList";
import CalendarPicker from "../Calendar/CalendarPicker";
import Button from "../ui/Button/Button";
import { IoIosSearch } from "react-icons/io";
import { useForm } from "react-hook-form";

const MainFilter = () => {
	const { register, handleSubmit } = useForm();
	const [selectedRange, setSelectedRange] = useState(null);

	const onSubmit = (data) => {
		console.log(data);
	};
	return (
		<div className="mx-auto w-full max-w-screen-xl rounded-lg p-4 backdrop-blur-xl">
			<form onSubmit={handleSubmit(onSubmit)}>
				<div className="flex flex-col flex-wrap items-center justify-center space-x-0 space-y-2 lg:flex-row lg:space-x-2 lg:space-y-0">
					<Input
						className="w-full bg-light text-center md:w-2/3 lg:w-auto"
						value="Ярославль"
						disabled
					/>
					<Select
						className="w-full bg-light text-center md:w-2/3 lg:w-auto"
						name="area"
						label={"Выбрать район"}
						register={register}
					>
						{DataAreaList.map((area) => (
							<option key={area.id} value={area.id}>
								{area.name}
							</option>
						))}
					</Select>
					<CalendarPicker
						selectedRange={selectedRange}
						setSelectedRange={setSelectedRange}
						className="w-full md:w-2/3 lg:w-1/5"
					/>
					<Input className="w-full bg-light md:w-2/3 lg:w-auto" />
					<Button className="action-button">
						<IoIosSearch size="24" />
					</Button>
				</div>
			</form>
		</div>
	);
};
export default MainFilter;
