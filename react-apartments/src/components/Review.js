import React, { Component } from 'react';
import apartment_1 from '../img/apartment-1.jpg';
import apartment_2 from '../img/apartment-2.jpg';
import apartment_3 from '../img/apartment-3.jpg';

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