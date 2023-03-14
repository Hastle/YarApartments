import React, { Component } from 'react';
import Header from '../components/header';
import Apartments from '../components/apartments';
import About from '../components/about';
import Review from '../components/review';
import Footer from '../components/footer';

function MainPage() {
	return (
		<>

			<Header />
			<Apartments />
			<About />
			<Review />
			<Footer />

		</>
	);
}

export default MainPage;