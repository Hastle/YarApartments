import React, { Component } from 'react';
import TinySlider from 'tiny-slider-react';
import 'tiny-slider/dist/tiny-slider.css';
import apartment_1 from '../img/apartment-1.jpg';
import apartment_2 from '../img/apartment-2.jpg';
import apartment_3 from '../img/apartment-3.jpg';

const imgStyles = {
	width: "100%",
	height: "320px",
	objectFit: "cover"
};

const imgs = [
	'assets/2a8ba7d861f356e0e208.jpg',
	'assets/9ee6b075dc5ba2363b24.jpg',
	'assets/a4173530183add16f35b.jpg',
	'assets/9ee6b075dc5ba2363b24.jpg',
	'assets/2a8ba7d861f356e0e208.jpg',
	'assets/a4173530183add16f35b.jpg'
];

const loadingImage =
"data:image/gif/jpg;base64";

const settings = {
	lazyload: true,
	nav: false,
	mouseDrag: true,
	loop: true,
	items: 3,
	speed: 700,
	arrowKeys: true,
	mouseDrag: true,
	autoplay: false,
	swipeAngle: true,
	controls: true,
	slideBy: 'page',
	gutter: 5,
	preventActionWhenRunning: true,
	responsive: {
		420: {
			items: 3
		}
	}
};

function Review() {
	return (
		<>

			<section id="reviews">
				<div className="container">
					<div className="row">
						<div className="col-md-6 mx-auto text-center">
							<h3>Отзывы клиентов</h3>
						</div>
					</div>
					<TinySlider settings={settings}>
						{imgs.map((el, index) => (
							<div key={index} style={{ position: "relative" }}>
								<img
									className={`tns-lazy-img`}
									src={loadingImage}
									data-src={el}
									alt=""
									style={imgStyles}
								/>
							</div>
						))}
					</TinySlider>
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

		</>
	);
}

export default Review;