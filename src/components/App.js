import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout/Layout";
import MainPage from "../pages/MainPage";
import Apartments from "../pages/Apartments";
import About from "../pages/About";
import Contacts from "../pages/Contacts";
import Login from "../pages/Login";
import Profile from "../pages/Profile";

import ScrollToTop from "../utils/ScrollToTop";

function App() {
	return (
		<BrowserRouter>
			<ScrollToTop />
			<Routes>
				<Route element={<Layout />}>
					<Route path="/" element={<MainPage />} />
					<Route path="/apartments" element={<Apartments />} />
					<Route path="/about" element={<About />} />
					<Route path="/contacts" element={<Contacts />} />
					<Route path="/login" element={<Login />} />
					<Route path="/profile" element={<Profile />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
