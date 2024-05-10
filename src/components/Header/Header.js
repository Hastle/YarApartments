import React from "react";
import Logotype from "../Logotype/Logotype";
import MainMenu from "../MainMenu/MainMenu";

function Header() {
	return (
		<header className="sticky top-0 flex h-[--nav-height] w-full items-center bg-black shadow-lg">
			<div className="container mx-auto">
				<div className="mx-4 flex items-center justify-between sm:mx-0">
					<Logotype />
					<MainMenu />
				</div>
			</div>
		</header>
	);
}

export default Header;
