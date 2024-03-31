import React from "react";
import "./styles.module.sass";
import Logotype from "../Logotype/Logotype";
import MainMenu from "../MainMenu/MainMenu";
import styles from "./styles.module.sass";
import grid from "../../styles/grid.module.sass";

function Header() {
	return (
		<header>
			<div className={grid["container"]}>
				<div className={styles.main_menu}>
					<Logotype />
					<MainMenu />
				</div>
			</div>
		</header>
	);
}

export default Header;
