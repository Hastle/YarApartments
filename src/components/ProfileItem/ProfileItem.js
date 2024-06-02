import React from "react";
const ProfileCard = ({ icon, title, description, onClick }) => {
	return (
		<div
			className="flex cursor-pointer flex-col space-y-2 rounded-lg p-3 shadow-lg"
			onClick={onClick}
		>
			<div>{icon}</div>
			<div>
				<div>{title}</div>
				<div className="text-sm text-grey">{description}</div>
			</div>
		</div>
	);
};

export default ProfileCard;
