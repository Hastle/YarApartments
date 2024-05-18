import React, { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

const Profile = () => {
	const { user } = useContext(AuthContext);

	return (
		<div>
			<h2>Профиль</h2>
			<p>Имя пользователя: {user?.sub}</p>
			<p>Роль: {user?.roles}</p>
		</div>
	);
};

export default Profile;
