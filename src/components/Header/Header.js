import React from "react";
import "./styles.module.sass";
import Logotype from "../Logotype/Logotype";
import MainMenu from "../MainMenu/MainMenu";
import styles from "./styles.module.sass";
import grid from "../../styles/grid.module.sass";

function Header() {
	return (
		<header className="sticky top-0 flex h-[70px] w-full z-100 bg-black shadow-lg">
			<div className="container mx-auto">
				<div className="flex relative justify-between items-center sm:mx-0 mx-4">
					<Logotype />
					<MainMenu />
				</div>
			</div>
		</header>
	);
}

export default Header;
// position: sticky
// top: 0
// display: flex
// height: $nav-height
// width: 100%
// z-index: 100
// align-items: center
// background: $black
// +box-shadow

// display: flex
// position: relative
// justify-content: space-between
// align-items: center
