import React, { useState } from "react";
import Checkbox from "../components/ui/Checkbox/Checkbox";
import Switch from "../components/ui/Switch/Switch";
import Card from "../components/Card/Card";
import Modal from "../components/ui/Modal/Modal";
import grid from "../styles/grid.module.sass";

import data from "../data/DataApartments";

function MainPage() {
	const [modalActive, setModalActive] = useState(false);
	const bodyContent = (
		<iframe
			src="https://player.vimeo.com/video/404256856?h=26f9cfff48"
			width="100%"
			height="600px"
			allow="autoplay; fullscreen; picture-in-picture"
			allowFullScreen
		></iframe>
	);
	const footerContent = <button>Отправить</button>;

	function renderContent(weight) {
		return (
			<>
				<h1>h1</h1>
				<h2>h2</h2>
				<h3>h3</h3>
				<h4>h4</h4>
				<h5>h5</h5>
				<h6>h6</h6>
				<p>
					This is {weight}. Lorem ipsum dolor sit amet, consectetur
					adipisicing elit. Culpa dolores fugit maiores perspiciatis
					placeat porro, quaerat quisquam recusandae repellat
					voluptatum. Atque cupiditate dolorem magnam molestiae
					nostrum. Ex magnam minus veritatis.
				</p>
			</>
		);
	}

	return (
		<>
			{["light", "regular", "medium", "semi-bold", "bold"].map(
				(weight, index) => (
					<div key={index} className={grid["col-md-6"]}>
						<div className={weight}>{renderContent(weight)}</div>
					</div>
				),
			)}

			<div className={grid["col-md-6"]}>
				<div className="">
					<Checkbox label={"парковочное место"} />
					<Checkbox checked disabled label={"балкон"} />
					<Checkbox disabled label={"с мебелью"} />
				</div>
				<div className="">
					<Switch label={"Квартиры от владельца"} />
					<Switch checked disabled label={"Без предоплаты"} />
					<Switch disabled label={"Посуточная оплата"} />
				</div>
				<hr />
				<div className="">
					<button
						style={{
							padding: "16px 32px",
							border: "1px solid #151515",
							marginTop: "10px",
						}}
						onClick={() => setModalActive(true)}
					>
						Модальное окно
					</button>
				</div>
			</div>

			{data.map((apartment) => (
				<div
					key={apartment.id}
					className={`${grid["col-md-4"]} ${grid["g-3"]}`}
				>
					<Card
						address={apartment.address}
						price={apartment.price}
						imageUrl={apartment.imageUrl}
					/>
				</div>
			))}
			<Modal
				active={modalActive}
				setActive={setModalActive}
				title="Тестовый заголовок"
				body={bodyContent}
				footer={footerContent}
			/>
		</>
	);
}

export default MainPage;
