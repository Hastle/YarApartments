import React from "react";
import { Link } from "react-router-dom";
import { MdCurrencyRuble } from "react-icons/md";
import FavoriteButton from "../FavoriteButton/FavoriteButton";

function Card({ id, address, priceShort, imageUrl }) {
	return (
		<div className="relative">
			<FavoriteButton className="absolute right-2 top-2 z-10" id={id} />
			<Link to={`/apartments/${id}`}>
				<div className="flex-column relative overflow-hidden rounded-lg bg-white transition-all hover:shadow-lg">
					<img
						src={imageUrl}
						alt={address}
						className="h-80 w-full object-cover"
					/>
					<div className="flex flex-col space-y-4 p-4">
						<div className="font-semi flex items-center">
							{priceShort} <MdCurrencyRuble /> / Сутки
						</div>
						<div className="color-grey overflow-hidden overflow-ellipsis whitespace-nowrap">
							{address}
						</div>
					</div>
				</div>
			</Link>
		</div>
	);
}

export default Card;
