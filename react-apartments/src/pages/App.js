import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from '../pages/MainPage';
import Login from '../pages/Login';

function App() {
	return (
		<>
			
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<MainPage />}/>
					<Route path="/login" element={<Login />}/>
				</Routes>
			</BrowserRouter>

		</>
	);
}

export default App;