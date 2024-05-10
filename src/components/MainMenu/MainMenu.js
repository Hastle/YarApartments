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
				className="relative flex text-white transition-all hover:text-green"
				onClick={toggleOpen}
				ref={ref}
			>
				<FiMenu size="24px" />
			</button>
			<div
				className={`absolute right-0 top-[calc(100%+21px)] w-full flex-col overflow-hidden rounded-lg bg-white shadow-lg transition-all lg:top-[34px] lg:w-1/4 ${isOpen ? "visible flex opacity-100" : "invisible hidden opacity-0"}`}
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
							className="px-5 py-3 text-accent hover:bg-white-hover"
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
