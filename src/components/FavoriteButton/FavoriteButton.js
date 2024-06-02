import React, { useContext, useState } from "react";
import { IoMdHeart, IoMdHeartEmpty } from "react-icons/io";
import Button from "../ui/Button/Button";
import { AuthContext } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const FavoriteButton = ({ className = "", id }) => {
	const { user } = useContext(AuthContext);
	const navigate = useNavigate();
	const [favorite, setFavorite] = useState(() => {
		return localStorage.getItem(`favorite_${id}`) === "true";
	});

	const handleAdd = () => {
		if (!user) {
			navigate("/signin");
		} else {
			if (favorite) {
				localStorage.removeItem(`favorite_${id}`);
			} else {
				localStorage.setItem(`favorite_${id}`, "true");
			}
			setFavorite(!favorite);
		}
	};

	return (
		<Button
			className={
				className +
				" transform-all p-2 " +
				(favorite ? "text-accent" : "text-black")
			}
			onClick={handleAdd}
		>
			{favorite ? <IoMdHeart size="24" /> : <IoMdHeartEmpty size="24" />}
		</Button>
	);
};

export default FavoriteButton;
