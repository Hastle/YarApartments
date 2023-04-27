import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from '../pages/MainPage';
import Login from './Login';
import Profile from '../pages/Profile';
import Apartments from '../pages/Apartments';

import ScrollToTop from '../utils/ScrollToTop';

function App() {
	return (
		<>
			
			<BrowserRouter>
				<ScrollToTop />
				<Routes>
					<Route path="/" element={<MainPage />}/>
					<Route path="/login" element={<Login />}/>
					<Route path="/profile" element={<Profile />}/>
					<Route path="/apartments" element={<Apartments />}/>
				</Routes>
			</BrowserRouter>

		</>
	)
}

export default App;