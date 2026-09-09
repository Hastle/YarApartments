import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { AuthContext } from "../../contexts/AuthContext";
import { BookingContext } from "../../contexts/BookingContext";
import CalendarPicker from "../Calendar/CalendarPicker";
import Button from "../ui/Button/Button";
import { MdCurrencyRuble } from "react-icons/md";

const BookingForm = ({
	apartment,
	selectedRange,
	setSelectedRange,
	totalNights,
}) => {
	const { user } = useContext(AuthContext);
	const { addBooking, bookings } = useContext(BookingContext);
	const navigate = useNavigate();
	const {
		handleSubmit,
		formState: { errors },
	} = useForm();

	const onFormSubmit = (event) => {
		event.preventDefault();
		if (!user) {
			navigate("/signin");
			return;
		}

		if (!selectedRange || !selectedRange.start || !selectedRange.end) {
			return;
		}

		const newBooking = {
			id: Date.now(),
			apartmentId: apartment.id,
			user: user.sub,
			address: apartment.address,
			checkInDate: new Date(selectedRange.start).toLocaleDateString(),
			checkOutDate: new Date(selectedRange.end).toLocaleDateString(),
			nightsCount: totalNights,
			totalPrice: apartment.priceShort * totalNights,
			confirmStatus: false,
		};
		addBooking(newBooking);
		toast.success("Бронирование завершено!");
	};

	return (
		<>
			<div className="flex justify-center">
				<CalendarPicker
					selectedRange={selectedRange}
					setSelectedRange={setSelectedRange}
					bookings={bookings}
				/>
			</div>
			<div className="flex">
				<span className="align-baseline">
					При заключении долгосрочного контракта цена{" "}
					{apartment.price}{" "}
					<MdCurrencyRuble className="inline-flex" /> в месяц.
				</span>
			</div>
			<form onSubmit={onFormSubmit} className="flex flex-col space-y-4">
				<Button type="submit" className="primary-button">
					Бронировать
				</Button>
			</form>
			{selectedRange && selectedRange.start && selectedRange.end && (
				<>
					<hr />
					<div className="font-semi flex justify-between">
						<span className="flex items-center">
							{apartment.priceShort} <MdCurrencyRuble /> x{" "}
							{totalNights} ночей
						</span>
						<span className="flex items-center">
							{apartment.priceShort * totalNights}{" "}
							<MdCurrencyRuble />
						</span>
					</div>
				</>
			)}
		</>
	);
};

export default BookingForm;
