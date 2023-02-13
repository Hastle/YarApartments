import React, { Component } from 'react';
import top_bg from '../img/top-bg.jpg';

function Header() {
	return (
		<>

			<header id="main" className="top-header parallax-container" data-position="bottom center" data-parallax="scroll" data-speed="0.2" data-image-src={top_bg}>
				<div className="container">
					<div className="top-navigation">
						<a href="#" className="logo">YarApartments.</a>
						<div className="main-menu">
							<ul>
								<li><a className="menu-item scroll" href="#main">Главная</a></li>
								<li><a className="menu-item scroll" href="#apartments">Квартиры</a></li>
								<li><a className="menu-item scroll" href="#about">О нас</a></li>
								<li><a className="menu-item scroll" href="#contacts">Контакты</a></li>
							</ul>
							<a className="primary-btn" href="#">Личный кабинет</a>
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
							<option value="1">Вариант 1</option>
							<option value="2">Вариант 2</option>
						</select>
					</div>
				</div>
			</header>

		</>
	);
}

export default Header;