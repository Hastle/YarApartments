import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FaVk, FaFacebookF, FaWhatsapp } from "react-icons/fa";
import Logotype from "../Logotype/Logotype";
import DataAreaList from "../../data/DataAreaList";
import DataSocialList from "../../data/DataSocialList";

function Footer() {
	return (
		<footer className="mt-auto flex w-full bg-black py-10 text-grey/60 md:py-28">
			<div className="container mx-auto flex flex-wrap justify-between">
				<div className="w-full flex-col p-3 md:w-1/3">
					<Logotype />
					<p>
						Достоверная база данных об аренде жилой, загородной и
						коммерческой недвижимости.
					</p>
					<p>
						Использование портала означает согласие с Политикой
						конфиденциальности.
					</p>
				</div>

				<div className="flex w-1/2 flex-col space-y-5 p-3 md:w-auto">
					<h2 className="text-white">Карта сайта</h2>
					<ul>
						<li>
							<NavLink to="/">Главная</NavLink>
						</li>
						<li>
							<NavLink to="/apartments">Квартиры</NavLink>
						</li>
						<li>
							<NavLink to="/about">О нас</NavLink>
						</li>
						<li>
							<NavLink to="/contacts">Контакты</NavLink>
						</li>
					</ul>
				</div>
				<div className="flex w-1/2 flex-col space-y-5 p-3 md:w-auto ">
					<h2 className="text-white">Районы</h2>
					<ul>
						{DataAreaList.map((area) => (
							<li key={area.name}>
								<Link to="/">{area.name}</Link>
							</li>
						))}
					</ul>
				</div>
				<div className="w-full flex-col space-y-5 p-3 md:w-auto">
					<h2 className="text-center text-white">Социальные сети</h2>
					<ul className="flex justify-center space-x-4">
						{DataSocialList.map(({ name, to, icon: Icon }) => (
							<li key={name}>
								<a
									href={to}
									target="_blank"
									rel="noopener noreferrer"
								>
									<Icon size={24} />
								</a>
							</li>
						))}
					</ul>
				</div>
				<div className="w-full flex-col p-3 text-center">
					<hr className="w-full border-grey/60" />
					<p>
						Адрес: 150013, г. Ярославль ул. Свободы, 72 ИП Лыков
						Е.С. ИНН 372800561920
					</p>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
