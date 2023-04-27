import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import './navbar.sass';
import AuthService from "../../services/auth.service";

const activeLink = 'menu-item menu-item--active:after';
const normalLink = 'menu-item'
/*{({isActive}) => isActive ? activeLink : normalLink}*/
function Navbar() {
	const currentUser = AuthService.getCurrentUser();
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
						{!currentUser ? (
							<Link className="primary-btn" to='/login'>Личный кабинет</Link>
						) : (
							<Link className="menu-item" to='/profile'><i className="fa fa-user" aria-hidden="true"></i></Link>)
						}
					</nav>
				</div>
			</div>
		</div>
	)
}

export default Navbar