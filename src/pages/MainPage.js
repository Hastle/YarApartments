import React from "react";
import top_bg from "../assets/images/home-bg-1.jpg";
import DataApartments from "../data/DataApartments";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import MainFilter from "../components/Filter/MainFilter";
import Card from "../components/Card/Card";

function MainPage() {
	return (
		<>
			<Header />
			<div
				className="flex h-[calc(100vh_-_70px)] w-full items-center bg-cover bg-right-bottom py-10 lg:h-[700px]"
				style={{ backgroundImage: `url(${top_bg})` }}
			>
				<MainFilter />
			</div>
			<div className="container mx-auto">
				<div className="flex w-full flex-wrap py-10">
					{DataApartments.map((apartment) => (
						<div key={apartment.id} className="w-full p-3 lg:w-1/3">
							<Card
								id={apartment.id}
								address={apartment.address}
								priceShort={apartment.priceShort}
								imageUrl={apartment.image[0]}
							/>
						</div>
					))}
				</div>
			</div>
			<Footer />
		</>
	);
}

export default MainPage;
