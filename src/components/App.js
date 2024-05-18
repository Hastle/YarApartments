import React from "react";
import { AuthProvider } from "../contexts/AuthContext";
import PrivateRoute from "../components/PrivateRoute/PrivateRoute";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout/Layout";
import MainPage from "../pages/MainPage";
import Apartments from "../pages/Apartments";
import ApartmentDetails from "../pages/ApartmentDetails";
import About from "../pages/About";
import Contacts from "../pages/Contacts";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import Profile from "../pages/Profile";

import ScrollToTop from "../utils/ScrollToTop";
import { YMaps } from "@pbe/react-yandex-maps";

function App() {
	const queryClient = new QueryClient();

	return (
		<AuthProvider>
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
								<Route
									path="/contacts"
									element={<Contacts />}
								/>
								<Route path="/signin" element={<SignIn />} />
								<Route path="/signup" element={<SignUp />} />
								<Route
									path="/profile"
									element={
										<PrivateRoute>
											<Profile />
										</PrivateRoute>
									}
								/>
							</Route>
						</Routes>
					</BrowserRouter>
				</YMaps>
			</QueryClientProvider>
		</AuthProvider>
	);
}

export default App;
