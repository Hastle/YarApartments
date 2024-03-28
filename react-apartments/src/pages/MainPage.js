import React from 'react';
import HeroOverlay from '../components/Sections/HeroOverlay/HeroOverlay';
import Apartments from '../components/Sections/Apartments/Apartments';
import About from '../components/Sections/About/About';
import Reviews from '../components/Sections/Reviews/Reviews';

function MainPage() {
	return (
		<>
			<HeroOverlay />
			<Apartments />
			<About />
			<Reviews />
		</>
	)
}

export default MainPage;
