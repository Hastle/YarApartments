import React from "react";
import Input from "../ui/Input/Input";
import Checkbox from "../ui/Checkbox/Checkbox";
import styles from "./styles.module.sass";
import Switch from "../ui/Switch/Switch";

function Filter() {
	return (
		<>
			<h3>Цена</h3>
			<div className={styles.inline}>
				<Input type="text" placeholder="" required={true} />
				<Input type="text" placeholder="" required={true} />
			</div>
			<h3>Количество комнат</h3>
			<div className={`${styles.inline}`}>
				<Checkbox label={"1"} />
				<Checkbox label={"2"} />
				<Checkbox label={"3"} />
				<Checkbox label={"4"} />
			</div>
			<h3>Дополнительно</h3>
			<Checkbox label={"Без залога"} />
			<Checkbox label={"Без предоплаты"} />
			<Checkbox label={"Балкон"} />
			<Checkbox label={"С животными"} />
			<div className={`${styles.inline}`}>
				<Switch checked disabled label={"Жилье от собственника"} />
			</div>
		</>
	);
}

export default Filter;
