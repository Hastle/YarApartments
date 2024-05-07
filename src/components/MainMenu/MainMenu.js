import React from "react";
import { FiMenu } from "react-icons/fi";
import { Link, NavLink } from "react-router-dom";
import useOutsideAlerter from "../../hooks/useOutsideAlerter";

function logout() {}

function MainMenu() {
	const { ref, isOpen, setIsOpen } = useOutsideAlerter(false);
	const toggleOpen = () => {
		isOpen === true ? setIsOpen(false) : setIsOpen(true);
	};
	let currentUser;
	return (
		<>
			<button
				className="flex relative text-white hover:text-green transition-all"
				onClick={toggleOpen}
				ref={ref}
			>
				<FiMenu size="24px" />
			</button>
			<div
				className={`flex-col absolute top-[calc(100%+21px)] lg:top-[34px] right-0 w-full lg:w-1/4 bg-white overflow-hidden rounded-lg shadow-lg transition-all ${isOpen ? "flex opacity-100 visible" : "hidden opacity-0 invisible"}`}
			>
				<NavLink className="px-5 py-3 hover:bg-white-hover" to="/">
					Главная
				</NavLink>
				<NavLink
					className="px-5 py-3 hover:bg-white-hover"
					to="/apartments"
				>
					Квартиры
				</NavLink>
				<NavLink className="px-5 py-3 hover:bg-white-hover" to="/about">
					О нас
				</NavLink>
				<NavLink
					className="px-5 py-3 hover:bg-white-hover"
					to="/contacts"
				>
					Контакты
				</NavLink>
				<hr />
				{!currentUser ? (
					<>
						<Link
							className="px-5 py-3 hover:bg-white-hover"
							to="/login"
						>
							Зарегистрироваться
						</Link>
						<Link
							className="px-5 py-3 hover:bg-white-hover"
							to="/login"
						>
							Войти
						</Link>
					</>
				) : (
					<>
						<Link
							className="px-5 py-3 hover:bg-white-hover"
							to="/profile"
						>
							Профиль
						</Link>
						<Link
							className="text-accent px-5 py-3 hover:bg-white-hover"
							onClick={logout}
							to="/"
						>
							Выйти
						</Link>
					</>
				)}
			</div>
		</>
	);
}

export default MainMenu;
