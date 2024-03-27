import React from 'react'
import {FiMenu} from "react-icons/fi";
import {Link, NavLink, useNavigate} from "react-router-dom";
import AuthService from "../../services/auth.service";
import useOutsideAlerter from "../../utils/useOutsideAlerter";
import styles from './styles.module.sass'

function MainMenu() {
	const currentUser = AuthService.getCurrentUser();
	let navigate = useNavigate();
	const logout = () => {
		AuthService.logout();
		navigate("/");
	};
	const {ref, isOpen, setIsOpen} = useOutsideAlerter(false);
	const toggleOpen = () => {
		isOpen === true ? setIsOpen(false) : setIsOpen(true);
		console.log(setIsOpen);
	}
	return (
		<>
			<button className={styles.menu_btn} onClick={toggleOpen} ref={ref}>
				<FiMenu size="24px"/>
			</button>
			<div className={`${styles.dropdown_menu} ${isOpen ? styles.active : ''} col-sm-12 col-xl-3 no-gutter`}>
				<NavLink className={styles.menu_item} to='/'>Главная</NavLink>
				<NavLink className={styles.menu_item} to='/apartments'>Квартиры</NavLink>
				<NavLink className={styles.menu_item} to='/about'>О нас</NavLink>
				<NavLink className={styles.menu_item} to='/contacts'>Контакты</NavLink>
				<hr/>
				{!currentUser ? (
					<>
						<Link className={styles.menu_item} to='/login'>Зарегистрироваться</Link>
						<Link className={styles.menu_item} to='/login'>Войти</Link>
					</>
				) : (
					<>
						<Link className={styles.menu_item} to='/profile'>Профиль</Link>
						<a className={`text--warning ${styles.menu_item}`} onClick={logout}>Выйти</a>
					</>
				)}
			</div>
		</>
	)
}

export default MainMenu
