import React, { useContext, useState } from "react";
import { AiFillHeart } from "react-icons/ai";
import Button from "../ui/Button/Button";
import { AuthContext } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const FavoriteButton = () => {
	const { user } = useContext(AuthContext);
	const navigate = useNavigate();
	const [favorite, setFavorite] = useState(false);

	const handleAdd = () => {
		if (!user) {
			navigate("/signin");
		} else {
			setFavorite(!favorite);
		}
	};

	return (
		<div>
			<Button
				className={
					"transform-all " + (favorite ? "text-accent" : "text-black")
				}
				onClick={handleAdd}
			>
				<AiFillHeart size="24" />
			</Button>
		</div>
	);
};

export default FavoriteButton;
