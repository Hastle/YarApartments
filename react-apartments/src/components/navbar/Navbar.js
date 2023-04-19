import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import './navbar.sass';

const activeLink = 'menu-item menu-item--active:after';
const normalLink = 'menu-item'
/*{({isActive}) => isActive ? activeLink : normalLink}*/
function Navbar() {
	return (
		
		<div className="top-navigation">
			<div className="container">
				<div className="main-menu">
					<NavLink className="logo" to='/'>YarApartments.</NavLink>
					<nav className="sub-menu">
						<NavLink className="menu-item" to='/'>Главная</NavLink>
						<NavLink className="menu-item" to='/apartments'>Квартиры</NavLink>
						<NavLink className="menu-item" to='/about'>О нас</NavLink>
						<NavLink className="menu-item" to='/contacts'>Контакты</NavLink>
						<Link className="primary-btn" to='/login'>Личный кабинет</Link>
					</nav>
				</div>
			</div>
		</div>
	)
}

export default Navbar