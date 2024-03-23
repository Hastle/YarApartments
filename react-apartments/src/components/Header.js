import React, { Component } from 'react';
import { Parallax } from 'react-parallax';
import Filter from '../components/filter/Filter';
import top_bg from '../img/top-bg.jpg';
import { Link } from 'react-router-dom';

function Header() {
	return (
		<Parallax
			bgImage={top_bg}
			strength={500}
			bgImageStyle={{
				width: '100%',
				height: 'auto',
				minHeight: '100vh',
				objectFit: 'cover',
				left: '50%'
			}}
		>
			<header id="main" className="top-header">
				<div className="container">
					<Filter />
				</div>
			</header>
		</Parallax>
	);
}

export default Header;
