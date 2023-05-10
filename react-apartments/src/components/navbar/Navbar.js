import React, {useState} from 'react';
import {Link, NavLink} from 'react-router-dom';
import './navbar.sass';
import AuthService from '../../services/auth.service';
import useOutsideAlerter from "../../utils/useOutsideAlerter";
import {FiMenu} from 'react-icons/fi';
import {FaUser} from 'react-icons/fa';

/*{({isActive}) => isActive ? activeLink : normalLink}*/
function Navbar() {
	const currentUser = AuthService.getCurrentUser();
	const {ref, isOpen, setIsOpen} = useOutsideAlerter(false);
	const toggleOpen = () => {
		isOpen === true ? setIsOpen(false) : setIsOpen(true);
	}
	return (
		<div className="top-navigation">
			<div className="container">
				<div className="main-menu">
					<NavLink className="logo" to='/'>YarApartments.</NavLink>
					<div className="sub-menu">
						<button className="menu-btn" onClick={toggleOpen}>
							<FiMenu size="24px" />
						</button>
					</div>
					<div className={isOpen ? "dropdown-menu active" : "dropdown-menu"} onClick={toggleOpen} ref={ref}>
						<NavLink className="menu-item" to='/'>Главная</NavLink>
						<NavLink className="menu-item" to='/apartments'>Квартиры</NavLink>
						<NavLink className="menu-item" to='/about'>О нас</NavLink>
						<NavLink className="menu-item" to='/contacts'>Контакты</NavLink>
						<hr/>
						{!currentUser ? (
							<>
								<Link className="menu-item" to='/login'>Зарегистрироваться</Link>
								<Link className="menu-item" to='/login'>Войти</Link>
							</>
						) : (
							<Link className="menu-item" to='/profile'><FaUser /> Профиль</Link>)
						}
					</div>
				</div>
			</div>
		</div>
	)
}

export default Navbar