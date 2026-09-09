import React, { useContext, useEffect, useState } from "react";
import ProfileCard from "../components/ProfileItem/ProfileItem";
import { AuthContext } from "../contexts/AuthContext";
import { BookingContext } from "../contexts/BookingContext";
import PersonalInfo from "../components/Account/PersonalInfo";
import Bookings from "../components/Account/Bookings";
import Favorites from "../components/Account/Favorites";
import Notifications from "../components/Account/Notifications";
import { FaRegAddressCard, FaRegBell, FaRegBuilding } from "react-icons/fa";
import { AiFillHeart } from "react-icons/ai";
import DataApartments from "../data/DataApartments";

function Profile() {
	const { user } = useContext(AuthContext);
	const { bookings } = useContext(BookingContext);
	const [selectedCard, setSelectedCard] = useState(null);

	const handleCardClick = (card) => {
		setSelectedCard(card);
	};

	return (
		<div className="w-full p-3">
			<div className="grid grid-cols-2 gap-3 md:grid-cols-4 lg:py-10">
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
						<PersonalInfo user={user} />
					)}
					{selectedCard === "bookings" && <Bookings />}
					{selectedCard === "favorite" && <Favorites />}
					{selectedCard === "notifications" && <Notifications />}
				</div>
			)}
		</div>
	);
}

export default Profile;
