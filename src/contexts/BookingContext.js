import React, { createContext, useState } from "react";

export const BookingContext = createContext();

export const BookingProvider = ({ children }) => {
	const [bookings, setBookings] = useState([]);

	const addBooking = (booking) => {
		setBookings((prevBookings) => [...prevBookings, booking]);
	};

	return (
		<BookingContext.Provider value={{ bookings, addBooking, setBookings }}>
			{children}
		</BookingContext.Provider>
	);
};
