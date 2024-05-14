import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout/Layout";
import MainPage from "../pages/MainPage";
import Apartments from "../pages/Apartments";
import ApartmentDetails from "../pages/ApartmentDetails";
import About from "../pages/About";
import Contacts from "../pages/Contacts";
import Login from "../pages/Login";
import Profile from "../pages/Profile";

import ScrollToTop from "../utils/ScrollToTop";
import { YMaps } from "@pbe/react-yandex-maps";

function App() {
	const queryClient = new QueryClient();

	return (
		<QueryClientProvider client={queryClient}>
			<YMaps query={{ lang: "en_RU" }}>
				<BrowserRouter>
					<ScrollToTop />
					<Routes>
						<Route path="/" element={<MainPage />} />
						<Route element={<Layout />}>
							<Route
								path="/apartments"
								element={<Apartments />}
							/>
							<Route
								path="/apartments/:id"
								element={<ApartmentDetails />}
							/>
							<Route path="/about" element={<About />} />
							<Route path="/contacts" element={<Contacts />} />
							<Route path="/login" element={<Login />} />
							<Route path="/profile" element={<Profile />} />
						</Route>
					</Routes>
				</BrowserRouter>
			</YMaps>
		</QueryClientProvider>
	);
}

export default App;
