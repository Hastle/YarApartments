import React from 'react'
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';

function Wrapper(props) {
	return (
		<div>
			<Navbar />
				<div className="mt-nh">
					{props.children}
				</div>
			<Footer />
		</div>
	)
}

export default Wrapper;