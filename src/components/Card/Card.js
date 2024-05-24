import React from "react";
import { Link } from "react-router-dom";
import { MdCurrencyRuble } from "react-icons/md";

function Card({ id, address, price, imageUrl }) {
	return (
		<Link to={`/apartments/${id}`}>
			<div className="flex-column overflow-hidden rounded-lg bg-white transition-all hover:shadow-lg">
				<img
					src={imageUrl}
					alt={address}
					className="h-75 w-full object-cover lg:h-80"
				/>
				<div className="flex-column p-4">
					<div className="font-semi mb-4 flex items-center">
						{price} <MdCurrencyRuble />
					</div>
					<div className="color-grey overflow-hidden overflow-ellipsis whitespace-nowrap">
						{address}
					</div>
				</div>
			</div>
		</Link>
	);
}

export default Card;
