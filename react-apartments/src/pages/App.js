import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from '../pages/MainPage';
import Login from '../pages/Login';
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
					<Route path="/apartments" element={<Apartments />}/>
				</Routes>
			</BrowserRouter>

		</>
	)
}

export default App;