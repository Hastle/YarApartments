import React, { Component } from 'react';
import { Parallax } from 'react-parallax';
import top_bg from '../img/top-bg.jpg';
import { Link } from 'react-router-dom';


function Header() {
	return (
		<>

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
					<div className="top-navigation">
						<Link className="logo" to='/'>YarApartments.</Link>
						<div className="main-menu">
							<ul>
								<li><a className="menu-item scroll" href="#main">Главная</a></li>
								<li><a className="menu-item scroll" href="#apartments">Квартиры</a></li>
								<li><a className="menu-item scroll" href="#about">О нас</a></li>
								<li><a className="menu-item scroll" href="#contacts">Контакты</a></li>
							</ul>
							<Link className="primary-btn" to='/login'>Личный кабинет</Link>
						</div>
					</div>
				</div>
				<div className="container">
					<div className="main-search">
						<select>
							<option value="1">1-комн. квартира</option>
							<option value="2">2-комн. квартира</option>
						</select>
						<select>
							<option value="1">Дзержинский</option>
							<option value="2">Заволжский</option>
							<option value="2">Кировский</option>
							<option value="2">Красноперекопский</option>
							<option value="2">Ленинский</option>
							<option value="2">Фрунзенский</option>
						</select>
						<select>
							<option value="1">Этаж 1</option>
							<option value="2">Этаж 2</option>
						</select>
					</div>
				</div>
			</header>

			</Parallax>

		</>
	);
}

export default Header;