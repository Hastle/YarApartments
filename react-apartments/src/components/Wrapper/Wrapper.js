import React from 'react'
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

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
