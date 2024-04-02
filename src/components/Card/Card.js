import React from "react";
import { Link } from "react-router-dom";
import { FaRubleSign } from "react-icons/fa";
import grid from "../../styles/grid.module.sass";
import styles from "./styles.module.sass";

function Card({ address, price, imageUrl }) {
	return (
		<Link to="/{id}">
			<div className={styles.card}>
				<img
					src={imageUrl}
					alt={address}
					className={styles.cardImage}
				/>
				<div className={styles.cardContent}>
					<div className={`${grid["mb-3"]} ${styles.cardPrice}`}>
						{price} <FaRubleSign />
					</div>
					<div className={`${styles.cardAddress}`}>{address}</div>
				</div>
			</div>
		</Link>
	);
}

export default Card;
