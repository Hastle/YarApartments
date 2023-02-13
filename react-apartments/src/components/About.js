import React, { Component } from 'react';
import apartment_6 from '../img/apartment-6.jpg';
import top_bg from '../img/top-bg.jpg';

function About() {
	return (
		<>

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

		</>
	);
}

export default About;