import React from "react";
import top_bg from "../assets/images/home-bg-1.jpeg";
import data from "../data/DataApartments";
import Card from "../components/Card/Card";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Input from "../components/ui/Input/Input";

function MainPage() {
	return (
		<>
			<Header />
			<div
				className=" flex h-[calc(100vh_-_70px)] w-full items-center bg-cover bg-right-bottom py-10 lg:h-[700px]"
				style={{ backgroundImage: `url(${top_bg})` }}
			>
				<div className="mx-auto w-full max-w-screen-xl rounded-lg p-4 backdrop-blur-xl">
					<form action="">
						<Input />
						<Input />
						<Input />
						<Input />
					</form>
				</div>
			</div>
			<div className="container mx-auto">
				<div className="flex w-full flex-wrap py-10">
					{data.map((apartment) => (
						<div key={apartment.id} className="w-full p-3 lg:w-1/3">
							<Card
								id={apartment.id}
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
