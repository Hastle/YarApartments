import React, { Component } from 'react';
import Header from '../components/header';
import Apartments from '../components/apartments';
import About from '../components/about';
import Review from '../components/review';
import Wrapper from '../components/Wrapper/Wrapper';


function MainPage() {
	return (
		<>
			<Wrapper>
				<Header />
				<Apartments />
				<About />
				<Review />
			</Wrapper>
		</>
	)
}

export default MainPage;
