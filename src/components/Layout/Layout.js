import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function Layout() {
	return (
		<>
			<Header />
			<div className="container mx-auto ">
				<div className="flex min-h-[calc(100vh-294px)] flex-wrap">
					<Outlet />
				</div>
			</div>
			<Footer />
		</>
	);
}

export default Layout;
