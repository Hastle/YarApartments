import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from '../pages/MainPage';
import Login from '../pages/Login';
import Apartments from '../pages/Apartments'

function App() {
	return (
		<>
			
			<BrowserRouter>
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