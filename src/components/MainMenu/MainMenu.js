import React from "react";
import { FiMenu } from "react-icons/fi";
import { Link, NavLink } from "react-router-dom";
import useOutsideAlerter from "../../hooks/useOutsideAlerter";
import styles from "./styles.module.sass";
import grid from "../../styles/grid.module.sass";

function logout() {}

function MainMenu() {
	const { ref, isOpen, setIsOpen } = useOutsideAlerter(false);
	const toggleOpen = () => {
		isOpen === true ? setIsOpen(false) : setIsOpen(true);
	};
	let currentUser;
	return (
		<>
			<button className={styles.menu_btn} onClick={toggleOpen} ref={ref}>
				<FiMenu size="24px" />
			</button>
			<div
				className={`${styles.dropdown_menu} ${isOpen ? styles.active : ""} ${grid["col-xl-3"]} ${grid["col-xs12"]} ${grid["p-0"]}`}
			>
				<NavLink className={styles.menu_item} to="/">
					Главная
				</NavLink>
				<NavLink className={styles.menu_item} to="/apartments">
					Квартиры
				</NavLink>
				<NavLink className={styles.menu_item} to="/about">
					О нас
				</NavLink>
				<NavLink className={styles.menu_item} to="/contacts">
					Контакты
				</NavLink>
				<hr />
				{!currentUser ? (
					<>
						<Link className={styles.menu_item} to="/login">
							Зарегистрироваться
						</Link>
						<Link className={styles.menu_item} to="/login">
							Войти
						</Link>
					</>
				) : (
					<>
						<Link className={styles.menu_item} to="/profile">
							Профиль
						</Link>
						<a
							className={`text--warning ${styles.menu_item}`}
							onClick={logout}
						>
							Выйти
						</a>
					</>
				)}
			</div>
		</>
	);
}

export default MainMenu;
