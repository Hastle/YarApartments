import React, { Component } from 'react';
import apartment_1 from '../img/apartment-1.jpg';
import apartment_2 from '../img/apartment-2.jpg';
import apartment_3 from '../img/apartment-3.jpg';
import apartment_4 from '../img/apartment-4.jpg';
import apartment_5 from '../img/apartment-5.jpg';
import apartment_6 from '../img/apartment-6.jpg';

function Apartments() {
	return (
		<>

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

		</>
	);
}

export default Apartments;