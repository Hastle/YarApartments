import React, { useContext } from "react";
import { toast } from "react-hot-toast";
import { BookingContext } from "../../contexts/BookingContext";
import { AuthContext } from "../../contexts/AuthContext";
import { Link } from "react-router-dom";
import Button from "../ui/Button/Button";
import { MdCurrencyRuble } from "react-icons/md";

function Bookings() {
	const { user, role } = useContext(AuthContext);
	const { bookings, setBookings } = useContext(BookingContext);

	const currentUserBookings = bookings.filter(
		(booking) => booking.user === user.sub,
	);

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
		toast.success("Вы отменили заявку!");
	};

	return (
		<div className="flex w-full">
			<div className="mx-auto flex w-full flex-col">
				<h1>Бронирования</h1>
				{role === "ROLE_ADMIN" ? (
					bookings.length === 0 ? (
						<p className="text-center">
							Нет заявок на бронирование.
						</p>
					) : (
						<table className="my-4 w-full table-auto">
							<thead>
								<tr>
									<th>Адрес</th>
									<th>Пользователь</th>
									<th>Дата заезда</th>
									<th>Дата выезда</th>
									<th>Кол-во ночей</th>
									<th>Сумма к оплате</th>
									<th>Статус</th>
									<th>Дополнительно</th>
								</tr>
							</thead>
							<tbody className="font-light">
								{bookings.map((booking) => (
									<tr
										key={booking.id}
										className="border-b border-gray-200 hover:bg-gray-100"
									>
										<td className="px-4 py-3 text-center">
											<Link
												to={`/apartments/${booking.apartmentId}`}
											>
												{booking.address}
											</Link>
										</td>
										<td className="px-4 py-3 text-center">
											<Link to="/">{booking.user}</Link>
										</td>
										<td className="px-4 py-3 text-center">
											{booking.checkInDate}
										</td>
										<td className="px-4 py-3 text-center">
											{booking.checkOutDate}
										</td>
										<td className="px-4 py-3 text-center">
											{booking.nightsCount}
										</td>
										<td className="px-4 py-3 text-center">
											{booking.totalPrice}{" "}
											<MdCurrencyRuble className="inline-flex" />
										</td>
										<td className="px-4 py-3 text-center">
											{booking.confirmStatus
												? "Одобрена"
												: "Рассматривается"}
										</td>
										<td className="flex justify-around px-4 py-3">
											<Button
												className="font-regular"
												disabled={booking.confirmStatus}
												onClick={() =>
													handleConfirmBooking(
														booking.id,
													)
												}
											>
												Подтвердить
											</Button>
											<Button
												className="font-regular text-accent"
												onClick={() =>
													handleCancelBooking(
														booking.id,
													)
												}
											>
												Отменить
											</Button>
										</td>
									</tr>
								))}
							</tbody>
						</table>
					)
				) : (
					<>
						{currentUserBookings.length === 0 ? (
							<p className="text-center">
								У вас нет заявок на бронирование.
							</p>
						) : (
							<table className="my-5 w-full table-auto">
								<thead>
									<tr>
										<th>Адрес</th>
										<th>Дата заезда</th>
										<th>Дата выезда</th>
										<th>Кол-во ночей</th>
										<th>Сумма к оплате</th>
										<th>Статус</th>
										<th>Дополнительно</th>
									</tr>
								</thead>
								<tbody className="font-light">
									{currentUserBookings.map((booking) => (
										<tr
											key={booking.id}
											className="border-b border-gray-200 hover:bg-gray-100"
										>
											<td className="px-4 py-3 text-center">
												<Link
													to={`/apartments/${booking.apartmentId}`}
												>
													{booking.address}
												</Link>
											</td>
											<td className="px-4 py-3 text-center">
												{booking.checkInDate}
											</td>
											<td className="px-4 py-3 text-center">
												{booking.checkOutDate}
											</td>
											<td className="px-4 py-3 text-center">
												{booking.nightsCount}
											</td>
											<td className="flex items-center justify-center px-4 py-3">
												{booking.totalPrice}{" "}
												<MdCurrencyRuble />
											</td>
											<td className="px-4 py-3 text-center">
												{booking.confirmStatus
													? "Одобрена"
													: "Рассматривается"}
											</td>
											<td className="px-4 py-3 text-center">
												<Button
													className="font-regular text-accent"
													onClick={() =>
														handleCancelBooking(
															booking.id,
														)
													}
													disabled={
														booking.confirmStatus
													}
												>
													Отменить
												</Button>
											</td>
										</tr>
									))}
								</tbody>
							</table>
						)}
					</>
				)}
			</div>
		</div>
	);
}

export default Bookings;
