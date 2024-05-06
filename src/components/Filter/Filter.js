import React from "react";
import Input from "../ui/Input/Input";
import Checkbox from "../ui/Checkbox/Checkbox";
import Switch from "../ui/Switch/Switch";

function Filter() {
	return (
		<>
			<h3 className="text-xl">Цена</h3>
			<div className="flex flex-wrap">
				<Input type="text" placeholder="" required={true} />
				<Input type="text" placeholder="" required={true} />
			</div>
			<h3 className="text-xl">Количество комнат</h3>
			<div className="flex content-evenly flex-wrap">
				{[1, 2, 3, 4].map((label, index) => (
					<Checkbox
						className={"mr-4"}
						key={index}
						label={String(label)}
					/>
				))}
			</div>
			<h3 className="text-xl">Дополнительно</h3>
			<Checkbox label={"Без залога"} />
			<Checkbox label={"Без предоплаты"} />
			<Checkbox label={"Балкон"} />
			<Checkbox label={"С животными"} />
			<div className="flex content-evenly flex-wrap">
				<Switch checked disabled label={"Жилье от собственника"} />
			</div>
			<button className="bg-lime-500 rounded-lg px-4 py-2 font-bold text-md text-white">
				Применить фильтры
			</button>
		</>
	);
}

export default Filter;
