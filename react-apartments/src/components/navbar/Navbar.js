import React from 'react';
import { Link } from 'react-router-dom';
import Styles from './navbar.sass'

function Navbar() {
	return (
		
		<div className="top-navigation">
			<div className="container">
				
				<div className="main-menu">
					<Link className="logo" to='/'>YarApartments.</Link>
					<div className="sub-menu">
						<ul>
							<li><Link className="menu-item" to='/'>Главная</Link></li>
							<li><Link className="menu-item" to='/apartments'>Квартиры</Link></li>
							<li><Link className="menu-item" to='/'>О нас</Link></li>
							<li><Link className="menu-item" to='/'>Контакты</Link></li>
						</ul>
						<Link className="primary-btn" to='/login'>Личный кабинет</Link>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Navbar