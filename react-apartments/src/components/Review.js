import React, { Component } from 'react';
import TinySlider from 'tiny-slider-react';
import 'tiny-slider/dist/tiny-slider.css';
import apartment_1 from '../img/apartment-1.jpg';
import apartment_2 from '../img/apartment-2.jpg';
import apartment_3 from '../img/apartment-3.jpg';

const imgStyles = {
	maxWidth: "100%",
	height: "auto",
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

// const PreviousBtn = (props) => {
// 	const {className, onClick} = props;
// 	return (
// 		<button type="button" className={className} onClick={onClick}><i className="fa fa-arrow-left"></i></button>
// 	)
// };

// const NextBtn = (props) => {
// 	const {className, onClick} = props;
// 	return (
// 		<button type="button" className={className} onClick={onClick}><i className="fa fa-arrow-right"></i></button>
// 	)
// };

const settings = {
	lazyload: true,
	nav: false,
	controlsContainer: '.sliderContainer',
	prevButton: '.PreviousBtn',
	nextButton: '.NextBtn',
	mouseDrag: true,
	loop: true,
	items: 3,
	speed: 700,
	arrowKeys: true,
	autoplay: false,
	swipeAngle: true,
	controls: true,
	slideBy: 'page',
	gutter: 5,
	preventActionWhenRunning: true,
	responsive: {
		1200: {
			items: 3
		},
		992: {
			items: 2
		},
		768: {
			items: 1
		},
		480: {
			items: 1
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
					<div className="sliderContainer">
					<TinySlider settings={settings}>
						{imgs.map((el, index) => (
							<div className="review-item" key={index} style={{ position: "relative" }}>
								<img
									className={`tns-lazy-img`}
									src={loadingImage}
									data-src={el}
									alt=""
									style={imgStyles}
								/>
								<div className="review-item-body">
									<h4>2-комн. квартира, 70 м²</h4>
									<p><span>Татьяна</span></p>
									<p>02.01.2023</p>
									<p>Неоднократно пользовалась услугами агенства, почти каждые выходные на машине приезжаю в Ярославль отдохнуть. Большой выбор чистых и уютных квартир, цены ниже гостиничных в два раза.
									</p>
								</div>
							</div>
						))}
					</TinySlider>
						<button type="button" className="PreviousBtn"><i className="fa fa-arrow-left"></i></button>
						<button type="button" className="NextBtn"><i className="fa fa-arrow-right"></i></button>
					</div>
				</div>
			</section>

		</>
	);
}

export default Review;