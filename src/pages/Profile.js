import React, { useContext, useState, useEffect } from "react";
import ProfileCard from "../components/ProfileItem/ProfileItem";
import { FaRegAddressCard, FaRegBuilding, FaRegBell } from "react-icons/fa";
import { AiFillHeart } from "react-icons/ai";

import { AuthContext } from "../contexts/AuthContext";
import DataApartments from "../data/DataApartments";
import Card from "../components/Card/Card";

function Profile() {
	const { user, role } = useContext(AuthContext);
	const [selectedCard, setSelectedCard] = useState(null);
	const [filteredApartments, setFilteredApartments] = useState([]);

	const handleCardClick = (card) => {
		setSelectedCard(card);
	};

	useEffect(() => {
		const favoriteKeys = Object.keys(localStorage).filter((key) =>
			key.startsWith("favorite_"),
		);
		const favoriteIdList = favoriteKeys.map((key) =>
			key.replace("favorite_", ""),
		);

		const filtered = DataApartments.filter((apartment) =>
			favoriteIdList.includes(apartment.id),
		);

		setFilteredApartments(filtered);
		console.log(filtered);
	}, [localStorage]);

	return (
		<div className="w-full p-3">
			<div className="flex flex-col">
				<h1>Профиль</h1>
				<p>
					{user?.sub}, {role}
				</p>
			</div>
			<div className="grid grid-cols-2 gap-3 md:grid-cols-4">
				<ProfileCard
					icon={<FaRegAddressCard size={30} />}
					title="Личные данные"
					description="Добавьте или измените данные"
					onClick={() => handleCardClick("personal")}
				/>
				<ProfileCard
					icon={<FaRegBuilding size={30} />}
					title="Заявки на бронирование"
					description="Ваши заявки на бронирование"
					onClick={() => handleCardClick("bookings")}
				/>
				<ProfileCard
					icon={<AiFillHeart size={30} />}
					title="Избранное"
					description="Квартиры добавленные в избранное"
					onClick={() => handleCardClick("favorite")}
				/>
				<ProfileCard
					icon={<FaRegBell size={30} />}
					title="Уведомления"
					description="Ваши уведомления"
					onClick={() => handleCardClick("notifications")}
				/>
			</div>
			{selectedCard && (
				<div className="mt-3">
					{selectedCard === "personal" && (
						<div className="flex h-[300px] w-full bg-fuchsia-400"></div>
					)}
					{selectedCard === "bookings" && (
						<div className="flex h-[300px] w-full bg-fuchsia-500"></div>
					)}
					{selectedCard === "favorite" && (
						<div className="grid grid-cols-1 gap-4 lg:grid-cols-2 xl:grid-cols-3">
							{filteredApartments.map((apartment) => (
								<div key={apartment.id}>
									<Card
										id={apartment.id}
										address={apartment.address}
										price={apartment.price}
										imageUrl={apartment.image[0]}
									/>
								</div>
							))}
						</div>
					)}

					{selectedCard === "notifications" && (
						<div className="flex h-[300px] w-full bg-fuchsia-700"></div>
					)}
				</div>
			)}
		</div>
	);
}

export default Profile;
