import React, { useContext, useState, useEffect } from "react";
import ProfileCard from "../components/ProfileItem/ProfileItem";
import { MdCurrencyRuble } from "react-icons/md";
import {
	FaRegAddressCard,
	FaRegBuilding,
	FaRegBell,
	FaRegEdit,
} from "react-icons/fa";

import { AuthContext } from "../contexts/AuthContext";
import Card from "../components/Card/Card";
import Button from "../components/ui/Button/Button";
import { BookingContext } from "../contexts/BookingContext";
import { Link, Navigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import PersonalInfo from "../components/Account/PersonalInfo";
import Bookings from "../components/Account/Bookings";
import Management from "../components/Account/Management";
import Notifications from "../components/Account/Notifications";

function Dashboard() {
	const { user, role, phone } = useContext(AuthContext);
	if (role !== "ROLE_ADMIN") {
		return <Navigate to="/" replace />;
	}
	const { bookings, setBookings } = useContext(BookingContext);
	const [selectedCard, setSelectedCard] = useState(null);

	const handleCardClick = (card) => {
		setSelectedCard(card);
	};

	const handleConfirmBooking = (bookingId) => {
		setBookings((prevBookings) =>
			prevBookings.map((booking) =>
				booking.id === bookingId
					? { ...booking, confirmStatus: true }
					: booking,
			),
		);
		toast.success("Заявка одобрена!");
	};

	const handleCancelBooking = (bookingId) => {
		setBookings((prevBookings) =>
			prevBookings.filter((booking) => booking.id !== bookingId),
		);
		toast.success("Заявка отклонена!");
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
					description="Полученные заявки на бронирование"
					onClick={() => handleCardClick("bookings")}
				/>
				<ProfileCard
					icon={<FaRegEdit size={30} />}
					title="Управление"
					description="Изменение данных, добавление, удаление"
					onClick={() => handleCardClick("management")}
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
					{selectedCard === "management" && <Management />}
					{selectedCard === "notifications" && <Notifications />}
				</div>
			)}
		</div>
	);
}

export default Dashboard;
