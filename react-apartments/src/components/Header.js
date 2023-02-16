import React, { Component } from 'react';
import { Parallax, Background } from 'react-parallax';
import top_bg from '../img/top-bg.jpg'



function Header() {
	return (
		<>

			<Parallax bgImage={top_bg} strength={500}  bgImageStyle={{width: '100%', height: 'auto', overflow: 'hidden', minHeight: '100vh', objectFit: 'cover'}}>

			<header id="main" className="top-header">
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

			</Parallax>



		</>
	);
}

export default Header;