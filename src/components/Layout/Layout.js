import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function Layout() {
	return (
		<>
			<Header />
			<div className="container mx-auto">
				<div className="flex flex-wrap">
					<Outlet />
				</div>
			</div>
			<Footer />
		</>
	);
}

export default Layout;
