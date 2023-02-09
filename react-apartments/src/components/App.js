import React, { Component } from 'react';
import apartment_1 from '../img/apartment-1.jpg';
import apartment_2 from '../img/apartment-2.jpg';
import apartment_3 from '../img/apartment-3.jpg';
import apartment_4 from '../img/apartment-4.jpg';
import apartment_5 from '../img/apartment-5.jpg';
import apartment_6 from '../img/apartment-6.jpg';
import top_bg from '../img/top-bg.jpg';

function App() {
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

	<section id="apartments">
		<div className="container">
			<div className="row">
				<div className="col-md-6 mx-auto text-center">
					<h3>Наши Квартиры</h3>
				</div>
			</div>
			<div className="row">
				<div className="col-md-6 col-lg-4 mb-3">
					<div className="apartment-card text-center">
						<a className="thumbnail" href="#"><img src={apartment_1} alt=""/></a>
						<div className="apartment-card-body">
							<h4><a href="#">2-комн. квартира, 90 м²</a></h4>
							<p>Санкт-Петербург, р-н Центральный, Смольнинское, Невский просп., 136</p>
						</div>
					</div>
				</div>
				<div className="col-md-6 col-lg-4 mb-3">
					<div className="apartment-card text-center">
						<a className="thumbnail" href="#"><img src={apartment_2} alt=""/></a>
						<div className="apartment-card-body">
							<h4><a href="#">1-комн. квартира, 61 м²</a></h4>
							<p>Москва, ЗАО, р-н Дорогомилово, Кутузовский просп., 15</p>
						</div>
					</div>
				</div>
				<div className="col-md-6 col-lg-4 mb-3">
					<div className="apartment-card text-center">
						<a className="thumbnail" href="#"><img src={apartment_3} alt=""/></a>
						<div className="apartment-card-body">
							<h4><a href="#">2-комн. квартира, 70 м²</a></h4>
							<p>Ярославль, р-н Кировский, Республиканская ул., 13к2</p>
						</div>
					</div>
				</div>
				<div className="col-md-6 col-lg-4 mb-3">
					<div className="apartment-card text-center">
						<a className="thumbnail" href="#"><img src={apartment_4} alt=""/></a>
						<div className="apartment-card-body">
							<h4><a href="#">3-комн. квартира, 88 м²</a></h4>
							<p>Ярославль, р-н Фрунзенский, мкр. Суздалка, Московский просп., 129к2</p>
						</div>
					</div>
				</div>
				<div className="col-md-6 col-lg-4 mb-3">
					<div className="apartment-card text-center">
						<a className="thumbnail" href="#"><img src={apartment_5} alt=""/></a>
						<div className="apartment-card-body">
							<h4><a href="#">2-комн. квартира, 70 м²</a></h4>
							<p>Москва, ЗАО, р-н Дорогомилово, Кутузовский просп., 15</p>
						</div>
					</div>
				</div>
				<div className="col-md-6 col-lg-4 mb-3">
					<div className="apartment-card text-center">
						<a className="thumbnail" href="#"><img src={apartment_6} alt=""/></a>
						<div className="apartment-card-body">
							<h4><a href="#">1-комн. квартира, 44 м²</a></h4>
							<p>Краснодарский край, Сочи, р-н Адлерский, Урожайная ул., 71Ак3</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<section id="about">
		<div className="container">
			<div className="row align-items-center">
				<div className="col-md-6">
					<div className="img-border">
						<a href="https://vimeo.com/404256856?autoplay=1" data-fancybox>
							<span className="icon-wrap">
								<i className="fa fa-play"></i>
							</span>
							<img src={apartment_6} alt=""/>
						</a>
					</div>
				</div>
				<div className="col-md-5 mx-auto">
					<h3>О нас</h3>
					<p>На сайте вы найдёте объявления по аренде и продаже недвижимости в Ярославле. Все представленные на сайте объекты проверены нашей командой модераторов. Удобно искать предложения благодаря структурированному каталогу и наличию поиска на нашем сайте. Для облегчения поиска мы реализовали систему рекомендаций похожих объявлений. Все объявления, которые Вам понравились, можно найти в личном кабинете с помощью добавления в "Избранное". Проверенное жильё в Ярославле находится на сайте.</p>
					<p><a href="https://vimeo.com/404256856" data-fancybox>Смотреть видео <i className="fa fa-arrow-right"></i></a></p>
				</div>
			</div>
		</div>
	</section>

	<section id="reviews">
		<div className="container">
			<div className="row">
				<div className="col-md-6 mx-auto text-center">
					<h3>Отзывы клиентов</h3>
				</div>
			</div>
			<div className="slider-container">
				<div className="slider">
					<div className="review-item">
						<img src={apartment_1} alt=""/>
						<div className="review-item-body">
							<h4>2-комн. квартира, 70 м²</h4>
							<p><span>Мария</span></p>
							<p>23.11.2022</p>
							<p>Неоднократно пользовалась услугами агенства, почти каждые выходные на машине приезжаю в Ярославль отдохнуть. Большой выбор чистых и уютных квартир, цены ниже гостиничных в два раза.
							</p>
						</div>
					</div>
					<div className="review-item">
						<img src={apartment_2} alt=""/>
						<div className="review-item-body">
							<h4>2-комн. квартира, 70 м²</h4>
							<p><span>Екатерина</span></p>
							<p>12.08.2022</p>
							<p>Неоднократно пользовалась услугами агенства, почти каждые выходные на машине приезжаю в Ярославль отдохнуть. Большой выбор чистых и уютных квартир, цены ниже гостиничных в два раза.
							</p>
						</div>
					</div>
					<div className="review-item">
						<img src={apartment_3} alt=""/>
						<div className="review-item-body">
							<h4>2-комн. квартира, 70 м²</h4>
							<p><span>Татьяна</span></p>
							<p>02.01.2023</p>
							<p>Неоднократно пользовалась услугами агенства, почти каждые выходные на машине приезжаю в Ярославль отдохнуть. Большой выбор чистых и уютных квартир, цены ниже гостиничных в два раза.
							</p>
						</div>
					</div>
					<div className="review-item">
						<img src={apartment_2} alt=""/>
						<div className="review-item-body">
							<h4>2-комн. квартира, 70 м²</h4>
							<p><span>Полина</span></p>
							<p>13.04.2022</p>
							<p>Неоднократно пользовалась услугами агенства, почти каждые выходные на машине приезжаю в Ярославль отдохнуть. Большой выбор чистых и уютных квартир, цены ниже гостиничных в два раза.
							</p>
						</div>
					</div>
					<div className="review-item">
						<img src={apartment_3} alt=""/>
						<div className="review-item-body">
							<h4>2-комн. квартира, 70 м²</h4>
							<p><span>Светлана</span></p>
							<p>29.02.2022</p>
							<p>Неоднократно пользовалась услугами агенства, почти каждые выходные на машине приезжаю в Ярославль отдохнуть. Большой выбор чистых и уютных квартир, цены ниже гостиничных в два раза.
							</p>
						</div>
					</div>
					<div className="review-item">
						<img src={apartment_1} alt=""/>
						<div className="review-item-body">
							<h4>2-комн. квартира, 70 м²</h4>
							<p><span>Елена</span></p>
							<p>23.10.2022</p>
							<p>Неоднократно пользовалась услугами агенства, почти каждые выходные на машине приезжаю в Ярославль отдохнуть. Большой выбор чистых и уютных квартир, цены ниже гостиничных в два раза.
							</p>
						</div>
					</div>
				</div>
				<button type="button" className="slider-prev"><i className="fa fa-arrow-left"></i></button>
				<button type="button" className="slider-next"><i className="fa fa-arrow-right"></i></button>
			</div>
		</div>
	</section>

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

export default App;