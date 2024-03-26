import React, {useState} from 'react';
import apartment_6 from '../img/apartment-6.jpg';
import top_bg from '../img/top-bg.jpg';
import Modal from "./Modals/Modal";

function About() {
	const [modalActive, setModalActive] = useState(false);
	const bodyContent = (
		<iframe src="https://player.vimeo.com/video/404256856?h=26f9cfff48" width="100%" height="420px" frameBorder="0"
				allow="autoplay; fullscreen; picture-in-picture" allowFullScreen>
		</iframe>
	)
	return (
		<>
			<section id="about">
				<div className="container">
					<div className="row align-items-center">
						<div className="col-md-6">
							<div className="img-border">
								<a onClick={() => setModalActive(true)}>
									<span className="icon-wrap">
										<i className="fa fa-play"></i>
									</span>
									<img src={apartment_6} alt=""/>
								</a>
							</div>
						</div>
						<div className="col-md-5 mx-auto">
							<h3>О нас</h3>
							<p>На сайте вы найдёте объявления по аренде и продаже недвижимости в Ярославле. Все
								представленные на сайте объекты проверены нашей командой модераторов. Удобно искать
								предложения благодаря структурированному каталогу и наличию поиска на нашем сайте. Для
								облегчения поиска мы реализовали систему рекомендаций похожих объявлений. Все
								объявления, которые Вам понравились, можно найти в личном кабинете с помощью добавления
								в "Избранное". Проверенное жильё в Ярославле находится на сайте.</p>
							<p><a onClick={() => setModalActive(true)}>Смотреть видео <i
								className="fa fa-arrow-right"></i></a></p>
						</div>
					</div>
				</div>
			</section>
			<Modal active={modalActive} setActive={setModalActive} body={bodyContent} />
		</>
	);
}

export default About;
