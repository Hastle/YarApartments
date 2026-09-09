import React from "react";
import Button from "../ui/Button/Button";

function PersonalInfo({ user }) {
	return (
		<div className="flex w-full">
			<div className="mx-auto flex w-full flex-col lg:w-1/2">
				<h1>Профиль</h1>
				<div className="flex items-center justify-between">
					<p>Имя пользователя: {user?.sub}</p>
					<Button>Редактировать</Button>
				</div>
				<hr />
				<div className="flex items-center justify-between">
					<p>Email: {`${user?.sub}@ya.ru`}</p>
					<Button>Редактировать</Button>
				</div>
				<hr />
				<div className="flex items-center justify-between">
					<p>
						Номер телефона: {user.phone ? user.phone : "Нет данных"}
					</p>
					<Button>Редактировать</Button>
				</div>
				<hr />
				<div className="flex items-center justify-between">
					<p>Пароль</p>
					<Button>Изменить</Button>
				</div>
				<hr />
			</div>
		</div>
	);
}

export default PersonalInfo;
