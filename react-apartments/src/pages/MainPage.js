import React from 'react';
import HeroOverlay from '../components/HeroOverlay/HeroOverlay';
import Apartments from '../components/apartments';
import About from '../components/about';
import Review from '../components/review';

function MainPage() {
	return (
		<>
			<HeroOverlay />
			<Apartments />
			<About />
			<Review />
		</>
	)
}

export default MainPage;
