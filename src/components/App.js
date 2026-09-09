import React from "react";
import { AuthProvider } from "../contexts/AuthContext";
import { FilterProvider } from "../contexts/FilterContext";
import { BookingProvider } from "../contexts/BookingContext";
import { QueryClient, QueryClientProvider } from "react-query";

import PrivateRoute from "../components/PrivateRoute/PrivateRoute";
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
import Dashboard from "../pages/Dashboard";

import ScrollToTop from "../utils/ScrollToTop";
import { YMaps } from "@pbe/react-yandex-maps";
import { Toaster } from "react-hot-toast";

function App() {
	const queryClient = new QueryClient();

	return (
		<AuthProvider>
			<FilterProvider>
				<BookingProvider>
					<QueryClientProvider client={queryClient}>
						<YMaps
							query={{
								lang: "ru_RU",
								apikey: process.env.API_YANDEX_KEY,
							}}
						>
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
										<Route
											path="/about"
											element={<About />}
										/>
										<Route
											path="/contacts"
											element={<Contacts />}
										/>
										<Route
											path="/signin"
											element={<SignIn />}
										/>
										<Route
											path="/signup"
											element={<SignUp />}
										/>
										<Route
											path="/profile"
											element={
												<PrivateRoute>
													<Profile />
												</PrivateRoute>
											}
										/>
										<Route
											path="/dashboard"
											element={
												<PrivateRoute>
													<Dashboard />
												</PrivateRoute>
											}
										/>
									</Route>
								</Routes>
							</BrowserRouter>
						</YMaps>
						<Toaster
							position="top-right"
							toastOptions={{ duration: 4000 }}
						/>
					</QueryClientProvider>
				</BookingProvider>
			</FilterProvider>
		</AuthProvider>
	);
}

export default App;
