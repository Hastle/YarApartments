import React from "react";
import grid from "../styles/grid.module.sass";
function MainPage() {
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
			<div className={grid.container}>
				<div className={grid.row}>
					{["light", "regular", "medium", "semi-bold", "bold"].map(
						(weight, index) => (
							<div
								key={index}
								className={`${grid["col-md-6"]} ${weight}`}
							>
								{renderContent(weight)}
							</div>
						),
					)}
				</div>
			</div>
		</>
	);
}

export default MainPage;
