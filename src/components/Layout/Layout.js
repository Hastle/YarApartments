import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import grid from "../../styles/grid.module.sass";

function Layout() {
	return (
		<>
			<Header />
			<div className={grid["container"]}>
				<div className={grid["row"]}>
					<Outlet />
				</div>
			</div>
			<Footer />
		</>
	);
}

export default Layout;
