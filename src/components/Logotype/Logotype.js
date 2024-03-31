import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./styles.module.sass";

function Logotype() {
	return (
		<NavLink to="/" className={styles.logo}>
			YarApartments.
		</NavLink>
	);
}

export default Logotype;
