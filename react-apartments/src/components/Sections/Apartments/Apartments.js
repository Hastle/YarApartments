import React from 'react';
import Data from '../../../api/data/Data';

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
