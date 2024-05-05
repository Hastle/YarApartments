import React from "react";
import "./styles.module.sass";
import Logotype from "../Logotype/Logotype";
import MainMenu from "../MainMenu/MainMenu";

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
