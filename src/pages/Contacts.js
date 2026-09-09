import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { useQuery } from "react-query";
import Loader from "../components/ui/Loader/Loader";

const fetchContactInfo = async () => {
	return {
		phone: "+7 (123) 456-78-90",
		email: "info@yarapartments.com",
		address: "г. Ярославль, ул. Советская, д. 10",
	};
};

function Contacts() {
	const {
		data: contactInfo,
		isLoading,
		error,
	} = useQuery("contactInfo", fetchContactInfo);

	if (isLoading) {
		return <Loader />;
	}

	if (error) {
		return (
			<div className="mt-10 text-center">Ошибка загрузки данных...</div>
		);
	}

	return (
		<div className="w-full p-3">
			<div className="flex flex-col">
				<h1>Контакты</h1>
				<p>Свяжитесь с нами</p>
			</div>
			<div className="grid grid-cols-1 gap-8 md:grid-cols-3">
				<div className="flex flex-col items-center">
					<FaPhoneAlt size={40} className="mb-4 text-blue-500" />
					<h2 className="mb-2 text-xl font-semibold">Телефон</h2>
					<p>{contactInfo.phone}</p>
				</div>
				<div className="flex flex-col items-center">
					<FaEnvelope size={40} className="mb-4 text-blue-500" />
					<h2 className="mb-2 text-xl font-semibold">Email</h2>
					<p>{contactInfo.email}</p>
				</div>
				<div className="flex flex-col items-center">
					<FaMapMarkerAlt size={40} className="mb-4 text-blue-500" />
					<h2 className="mb-2 text-xl font-semibold">Адрес</h2>
					<p>{contactInfo.address}</p>
				</div>
			</div>
		</div>
	);
}

export default Contacts;
