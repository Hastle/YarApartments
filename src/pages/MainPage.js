import React from "react";
import top_bg from "../assets/images/home-bg-1.jpg";
import DataApartments from "../data/DataApartments";
import Card from "../components/Card/Card";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Input from "../components/ui/Input/Input";
import { useForm } from "react-hook-form";
import Select from "../components/ui/Select/Select";
import Button from "../components/ui/Button/Button";
import { IoIosSearch } from "react-icons/io";
import DataAreaList from "../data/DataAreaList";

function MainPage() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const onSubmit = (data) => {
		console.log(data);
	};

	return (
		<>
			<Header />
			<div
				className="flex h-[calc(100vh_-_70px)] w-full items-center bg-cover bg-right-bottom py-10 lg:h-[700px]"
				style={{ backgroundImage: `url(${top_bg})` }}
			>
				<div className="mx-auto w-full max-w-screen-xl rounded-lg p-4 backdrop-blur-xl">
					<form onSubmit={handleSubmit(onSubmit)}>
						<div className="flex flex-wrap items-center justify-center space-x-2">
							<Input />
							<Select
								name="area"
								label={"Выбрать район"}
								register={register}
							>
								{DataAreaList.map((area) => (
									<option key={area.id} value={area.id}>
										{area.name}
									</option>
								))}
							</Select>
							<Input />
							<Input />
							<Button className="action-button">
								<IoIosSearch size="24" />
							</Button>
						</div>
					</form>
				</div>
			</div>
			<div className="container mx-auto">
				<div className="flex w-full flex-wrap py-10">
					{DataApartments.map((apartment) => (
						<div key={apartment.id} className="w-full p-3 lg:w-1/3">
							<Card
								id={apartment.id}
								address={apartment.address}
								price={apartment.price}
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
