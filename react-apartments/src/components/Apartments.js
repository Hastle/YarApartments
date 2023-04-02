import React, { Component } from 'react';
import apartment_1 from '../img/apartment-1.jpg';
import apartment_2 from '../img/apartment-2.jpg';
import apartment_3 from '../img/apartment-3.jpg';
import apartment_4 from '../img/apartment-4.jpg';
import apartment_5 from '../img/apartment-5.jpg';
import apartment_6 from '../img/apartment-6.jpg';

const Data = [
	{
		mainImage: apartment_1,
		title: '2-комн. квартира, 90 м²',
		address: 'Санкт-Петербург, р-н Центральный, Смольнинское, Невский просп., 136'
	},
	{
		mainImage: apartment_2,
		title: '1-комн. квартира, 61 м²',
		address: 'Москва, ЗАО, р-н Дорогомилово, Кутузовский просп., 15'
	},
	{
		mainImage: apartment_3,
		title: '2-комн. квартира, 70 м²',
		address: 'Ярославль, р-н Кировский, Республиканская ул., 13к2'
	},
	{
		mainImage: apartment_4,
		title: '3-комн. квартира, 88 м²',
		address: 'Ярославль, р-н Фрунзенский, мкр. Суздалка, Московский просп., 129к2'
	},
	{
		mainImage: apartment_5,
		title: '2-комн. квартира, 70 м²',
		address: 'Москва, ЗАО, р-н Дорогомилово, Кутузовский просп., 15'
	},
	{
		mainImage: apartment_6,
		title: '1-комн. квартира, 44 м²',
		address: 'Краснодарский край, Сочи, р-н Адлерский, Урожайная ул., 71Ак3'
	},
]
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
						{Data.map((Data =>
						<div className="col-md-6 col-lg-4 mb-3">
							<div className="apartment-card text-center">
								<a className="thumbnail" href="#">
									<img src={Data.mainImage} alt=""/>
								</a>
								<div className="apartment-card-body">
									<h4><a href="#">{Data.title}</a></h4>
									<p>{Data.address}</p>
								</div>
							</div>
						</div>
						))}
					</div>
				</div>
			</section>

		</>
	);
}

export default Apartments;