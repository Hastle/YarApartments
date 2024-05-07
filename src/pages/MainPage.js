import React from "react";
import top_bg from "../assets/images/home-bg-1.jpeg";
import data from "../data/DataApartments";
import Card from "../components/Card/Card";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

function MainPage() {
	return (
		<>
			<Header />
			<div
				className=" flex items-center w-full h-[700px] py-10 bg-cover bg-right-bottom"
				style={{ backgroundImage: `url(${top_bg})` }}
			>
				<div className="max-w-screen-xl mx-auto w-full p-4 rounded-lg backdrop-blur-xl">
					<form action="">
						<input type="text" />
						<input type="text" />
						<input type="text" />
						<input type="text" />
					</form>
				</div>
			</div>
			<div className="container mx-auto">
				<div className="flex flex-wrap py-10 w-full">
					{data.map((apartment) => (
						<div key={apartment.id} className="w-full lg:w-1/3 p-3">
							<Card
								address={apartment.address}
								price={apartment.price}
								imageUrl={apartment.imageUrl}
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
