import React, { Component } from 'react';
import Styles from './footer.sass'

function Footer() {
	return (
		<>

			<footer>
				<div className="container">
					<div className="row">
						<div className="col-md-4 text-center">
							<a href="#" className="logo">YarApartments.</a>
							<p>Достоверная база данных о продаже и аренде жилой, загородной и коммерческой недвижимости</p>
							<p>Теперь можно проводить сделки где угодно, не посещая отделения банков и МФЦ.</p>
							<a href="#" className="chief-btn">Читать ещё</a>
						</div>
						<div className="col-md-5">
							<div className="row">
								<div className="col-md-6">
									<h5>Карта сайта</h5>
									<ul className="footer-list">
										<li><a className="scroll" href="#main">Главная</a></li>
										<li><a className="scroll" href="#apartments">Квартиры</a></li>
										<li><a className="scroll" href="#about">О нас</a></li>
										<li><a className="scroll" href="#contacts">Контакты</a></li>
									</ul>
								</div>
								<div className="col-md-6">
									<h5>Районы</h5>
									<ul className="footer-list">
										<li><a href="#">Дзержинский</a></li>
										<li><a href="#">Заволжский</a></li>
										<li><a href="#">Кировский</a></li>
										<li><a href="#">Красноперекопский</a></li>
										<li><a href="#">Ленинский</a></li>
										<li><a href="#">Фрунзенский</a></li>
									</ul>
								</div>
							</div>
						</div>
						<div className="col-md-3">
							<h5 className="text-center">Социальные сети</h5>
							<div className="social-links">
								<a href="#"><i className="fab fa-vk" aria-hidden="true"></i></a>
								<a href="#"><i className="fab fa-facebook-f" aria-hidden="true"></i></a>
								<a href="#"><i className="fab fa-whatsapp" aria-hidden="true"></i></a>
							</div>
						</div>
					</div>
					<div className="row mt-3">
						<div className="col-md-12 copyright">
							<p>Copyright © 2023 All Rights Reserved</p>
						</div>
					</div>
				</div>
			</footer>

		</>
	);
}

export default Footer;