import React, { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import {
	FaUser,
	FaLock,
	FaEnvelope,
	FaPlus,
	FaEdit,
	FaTrash,
} from "react-icons/fa";
import Input from "../components/ui/Input/Input";
import Button from "../components/ui/Button/Button";
import Checkbox from "../components/ui/Checkbox/Checkbox";

const Profile = () => {
	const { user, role } = useContext(AuthContext);

	const bookingData = [
		{
			id: 1,
			address: "Ярославль, ул. Свердлова, 43А",
			dates: "25/05/2024 - 30/05/2024",
			userName: "user5",
		},
		{
			id: 2,
			address: "Ярославль, ул.Республиканская, 13к2",
			dates: "15/05/2024 - 16/05/2024",
			userName: "user6",
		},
		{
			id: 3,
			address: "Ярославль, ул. Лескова, 44",
			dates: "13/05/2024 - 16/05/2024",
			userName: "user5",
		},
	];

	return (
		<div className="container mx-auto py-8">
			<div className="grid grid-cols-1 gap-8 md:grid-cols-2">
				<div className="rounded-lg bg-white p-6 shadow-md">
					<h2 className="mb-4 font-bold text-2xl">Личный кабинет</h2>
					<div className="mb-4 flex items-center">
						<FaUser className="mr-2 text-gray-500" />
						<span className="text-gray-700">
							Имя пользователя: {user?.sub}
						</span>
					</div>
					<div className="mb-4 flex items-center">
						<FaLock className="mr-2 text-gray-500" />
						<span className="text-gray-700">Роль: {role}</span>
					</div>
					<div className="mb-4 flex items-center">
						<FaEnvelope className="mr-2 text-gray-500" />
						<span className="text-gray-700">
							Email: {user?.email || "user4@ya.ru"}
						</span>
					</div>
					<button className="secondary-button">
						Изменить пароль
					</button>
				</div>
				<div>
					<h2 className="mb-4 font-bold text-2xl">
						Панель управления
					</h2>
					<div className="mb-8 flex justify-between">
						<button className="primary-button flex items-center justify-center">
							<FaPlus className="mr-2" />
							Добавить квартиру
						</button>
						<button className="primary-button flex items-center justify-center">
							<FaEdit className="mr-2" />
							Редактировать квартиру
						</button>
						<button className="primary-button flex items-center justify-center bg-accent">
							<FaTrash className="mr-2" />
							Удалить квартиру
						</button>
					</div>
					<div className="rounded-lg bg-white p-6 shadow-md">
						<h3 className="mb-4 font-bold text-xl">
							Заявки на бронирование
						</h3>
						<table className="w-full table-auto">
							<thead>
								<tr className="bg-gray text-sm uppercase leading-normal text-gray-600">
									<th className="px-6 py-3">#</th>
									<th className="px-6 py-3">Адрес</th>
									<th className="px-6 py-3">Даты</th>
									<th className="px-6 py-3">
										Имя пользователя
									</th>
								</tr>
							</thead>
							<tbody className="font-light text-sm text-gray-600">
								{bookingData.map((booking) => (
									<tr
										key={booking.id}
										className="border-b border-gray-200 hover:bg-gray-100"
									>
										<td className="px-4 py-3 text-center">
											{booking.id}
										</td>
										<td className="px-4 py-3 text-center">
											{booking.address}
										</td>
										<td className="px-4 py-3 text-center">
											{booking.dates}
										</td>
										<td className="px-4 py-3 text-center">
											{booking.userName}
										</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
		// <form>
		// 	<div className="grid gap-4">
		// 		<h1 className="my-4">Добавить квартиру</h1>
		// 		<Input
		// 			type="text"
		// 			placeholder="Название квартиры"
		// 			required
		// 			{...register("userName")}
		// 		/>
		// 		<Input type="file" multiple {...register("userName")} />
		// 		<Input
		// 			type="text"
		// 			placeholder="Адрес"
		// 			{...register("userName")}
		// 		/>
		// 		<Input
		// 			type="text"
		// 			placeholder="Описание"
		// 			{...register("userName")}
		// 		/>
		// 		<Input
		// 			type="number"
		// 			placeholder="Цена"
		// 			{...register("userName")}
		// 		/>
		// 		<Checkbox
		// 			label={"Без залога"}
		// 			name="additional.noDeposit"
		// 			{...register("userName")}
		// 		/>
		// 		<Checkbox
		// 			label={"Без предоплаты"}
		// 			name="additional.noPrepayment"
		// 			{...register("userName")}
		// 		/>
		// 		<Checkbox
		// 			label={"Балкон"}
		// 			name="additional.balcony"
		// 			{...register("userName")}
		// 		/>
		// 		<Checkbox
		// 			label={"С животными"}
		// 			name="additional.pets"
		// 			{...register("userName")}
		// 		/>
		// 		<Button type="submit" className="primary-button mt-4">
		// 			{"Добавить"}
		// 		</Button>
		// 	</div>
		// </form>
	);
};

export default Profile;
