import React from "react";
import { Link } from "react-router-dom";
import { FaRubleSign } from "react-icons/fa";

function Card({ address, price, imageUrl }) {
	return (
		<Link to="/{id}">
			<div className="flex-column bg-white rounded-lg overflow-hidden hover:shadow-lg transition-all">
				<img
					src={imageUrl}
					alt={address}
					className="lg:h-80 md:h-70 w-full object-cover"
				/>
				<div className="flex-column p-4">
					<div className="flex items-center font-semi mb-4">
						{price} <FaRubleSign />
					</div>
					<div className="overflow-hidden whitespace-nowrap overflow-ellipsis color-grey">
						{address}
					</div>
				</div>
			</div>
		</Link>
	);
}

export default Card;
