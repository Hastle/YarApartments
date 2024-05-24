import apartment_1 from "../assets/images/apartment-1.jpg";
import apartment_2 from "../assets/images/apartment-2.jpg";
import apartment_3 from "../assets/images/apartment-3.jpg";
import apartment_4 from "../assets/images/apartment-4.jpg";
import apartment_5 from "../assets/images/apartment-5.jpg";
import apartment_6 from "../assets/images/apartment-6.jpg";
import apartment_7 from "../assets/images/apartment-7.jpg";
import apartment_8 from "../assets/images/apartment-8.jpg";
import apartment_9 from "../assets/images/apartment-9.jpg";
import apartment_10 from "../assets/images/apartment-10.jpg";
import apartment_11 from "../assets/images/apartment-11.jpg";
import apartment_12 from "../assets/images/apartment-12.jpg";
import apartment_13 from "../assets/images/apartment-13.jpg";
import apartment_14 from "../assets/images/apartment-14.jpg";
import apartment_15 from "../assets/images/apartment-15.jpg";
import apartment_16 from "../assets/images/apartment-16.jpg";
import apartment_17 from "../assets/images/apartment-17.jpg";
import apartment_18 from "../assets/images/apartment-18.jpg";
import apartment_19 from "../assets/images/apartment-19.jpg";
import apartment_20 from "../assets/images/apartment-20.jpg";
import apartment_21 from "../assets/images/apartment-21.jpg";
import apartment_22 from "../assets/images/apartment-22.jpg";
import apartment_23 from "../assets/images/apartment-23.jpg";
import apartment_24 from "../assets/images/apartment-24.jpg";
import apartment_25 from "../assets/images/apartment-25.jpg";
import apartment_26 from "../assets/images/apartment-26.jpg";
import apartment_27 from "../assets/images/apartment-27.jpg";
import apartment_28 from "../assets/images/apartment-28.jpg";
import apartment_29 from "../assets/images/apartment-29.jpg";
import apartment_30 from "../assets/images/apartment-30.jpg";

// remove latitude, longitude and useGeocoding

const DataApartments = [
	{
		id: "0",
		title: "1-к. квартира, 35 м², 2/5 эт.",
		price: "27 992",
		image: [
			apartment_1,
			apartment_2,
			apartment_3,
			apartment_4,
			apartment_5,
		],
		address: "Ярославль, ул.Республиканская, 13к2",
		area: "р-н Кировский",
		latitude: "57.633797",
		longitude: "39.881659",
		room: "1",
		sleepingPlaces: "2",
		totalArea: "35 м²",
		livingArea: "20 м²",
		currentFloor: "2",
		totalFloors: "5",
		balcony: "балкон",
		furniture: "кухня, хранение одежды, спальные места",
		appliances: "холодильник, плита, микроволновка, стиральная машина",
		internetAndTV: "Wi-Fi, телевидение",
		description:
			"Уютная однокомнатная квартира в центре города. Отличное состояние, есть все необходимое для комфортного проживания.",
	},
	{
		id: "1",
		title: "2-к. квартира, 50 м², 3/9 эт.",
		price: "35 600",
		image: [
			apartment_6,
			apartment_7,
			apartment_8,
			apartment_9,
			apartment_10,
		],
		address: "Ярославль, ул. Тургенева, 34",
		area: "р-н Ленинский",
		latitude: "57.634351",
		longitude: "39.853057",
		room: "2",
		sleepingPlaces: "3",
		totalArea: "50 м²",
		livingArea: "30 м²",
		currentFloor: "3",
		totalFloors: "9",
		balcony: "балкон",
		furniture: "кухня, хранение одежды, спальные места, рабочее место",
		appliances:
			"кондиционер, холодильник, плита, микроволновка, стиральная машина, телевизор",
		internetAndTV: "Wi-Fi, телевидение",
		description:
			"Просторная двухкомнатная квартира в районе Ленинский. Современный ремонт, полная меблировка, идеальна для семьи.",
	},
	{
		id: "2",
		title: "3-к. квартира, 75 м², 5/12 эт.",
		price: "40 200",
		image: [
			apartment_11,
			apartment_12,
			apartment_13,
			apartment_14,
			apartment_15,
		],
		address: "Ярославль, ул. Лескова, 44",
		area: "р-н Фрунзенский",
		latitude: "57.579672",
		longitude: "39.904935",
		room: "3",
		sleepingPlaces: "4",
		totalArea: "75 м²",
		livingArea: "50 м²",
		currentFloor: "5",
		totalFloors: "12",
		balcony: "балкон",
		furniture:
			"кухня, хранение одежды, спальные места, рабочее место, гостиная",
		appliances:
			"кондиционер, холодильник, плита, микроволновка, стиральная машина, телевизор",
		internetAndTV: "Wi-Fi, телевидение",
		description:
			"Трехкомнатная квартира в Фрунзенском районе. Просторные комнаты, современный ремонт, идеальна для большой семьи.",
	},
	{
		id: "3",
		title: "2-к. квартира, 57 м², 5/5 эт.",
		price: "29 800",
		image: [
			apartment_16,
			apartment_17,
			apartment_18,
			apartment_19,
			apartment_20,
		],
		address: "Ярославль, ул. Пушкина, 17",
		area: "р-н Кировский",
		latitude: "57.627571",
		longitude: "39.874823",
		room: "2",
		sleepingPlaces: "3",
		totalArea: "57 м²",
		livingArea: "34 м²",
		currentFloor: "5",
		totalFloors: "5",
		balcony: "нет",
		furniture: "кухня, хранение одежды, спальные места",
		appliances: "холодильник, плита, микроволновка, стиральная машина",
		internetAndTV: "Wi-Fi, телевидение",
		description:
			"Уютная однокомнатная квартира в центре города. Идеальна для одного человека или пары. Есть все необходимое для комфортного проживания.",
	},
	{
		id: "4",
		title: "2-к. квартира, 45 м², 3/5 эт.",
		price: "33 500",
		image: [
			apartment_21,
			apartment_22,
			apartment_23,
			apartment_24,
			apartment_25,
		],
		address: "Ярославль, ул. Свободы, 62к2",
		area: "р-н Кировский",
		latitude: "57.627677",
		longitude: "39.849733",
		room: "2",
		sleepingPlaces: "3",
		totalArea: "45 м²",
		livingArea: "28 м²",
		currentFloor: "3",
		totalFloors: "5",
		balcony: "балкон",
		furniture: "кухня, хранение одежды, спальные места",
		appliances:
			"кондиционер, холодильник, плита, микроволновка, стиральная машина, телевизор",
		internetAndTV: "Wi-Fi, телевидение",
		description:
			"Уютная двухкомнатная квартира в районе Кировский. Отличное состояние, есть все необходимое для комфортного проживания.",
	},
	{
		id: "5",
		title: "2-к. квартира, 44 м², 4/5 эт.",
		price: "31 700",
		image: [
			apartment_26,
			apartment_27,
			apartment_28,
			apartment_29,
			apartment_30,
		],
		address: "Ярославль, ул. Свердлова, 43А",
		area: "р-н Кировский",
		latitude: "57.630347",
		longitude: "39.861492",
		room: "2",
		sleepingPlaces: "2",
		totalArea: "44 м²",
		livingArea: "29 м²",
		currentFloor: "4",
		totalFloors: "5",
		balcony: "балкон",
		furniture: "кухня, хранение одежды, спальные места",
		appliances:
			"кондиционер, холодильник, плита, микроволновка, стиральная машина, телевизор",
		internetAndTV: "Wi-Fi, телевидение",
		description:
			"Квартира расположена в центре города, недалеко от основных транспортных узлов и магазинов. Она состоит из двух комнат, что делает ее идеальным выбором для семьи или пары. Балкон предоставляет дополнительное пространство для отдыха и развлечений, позволяя наслаждаться видами города. Владелец готов обсудить условия аренды и предоставить дополнительную информацию.",
	},
];

export default DataApartments;
