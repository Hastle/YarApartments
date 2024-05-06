import React from "react";
import top_bg from "../assets/images/home-bg-1.jpeg";
import data from "../data/DataApartments";
import Card from "../components/Card/Card";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

function MainPage() {
	return (
		<>
			<Header />
			<div
				className="flex items-center w-full h-[700px] py-10 bg-cover bg-right-bottom"
				style={{ backgroundImage: `url(${top_bg})` }}
			>
				<div className="max-w-screen-xl mx-auto w-full px-4 h-[600px] rounded-lg backdrop-blur-xl">
					<form>
						<div className="sm:px-8 sm:py-6 p-4">
							<div className="flex flex-col lg:flex-row md:flex-row w-full bg-white rounded mb-3.5">
								<div className="border-basic-100 relative border-r-2 basis-1/6">
									<div
										role="button"
										className="cursor-pointer sm:px-9 py-4 pl-2.5 pr-6"
									>
										<div className="whitespace-nowrap flex items-center justify-between">
											<span>Квартира</span>
											<span className="ml-auto pl-1.5">
												<svg
													viewBox="0 0 12 6"
													fill="none"
													height="10"
													width="10"
													style={{
														fill: "currentcolor",
													}}
												>
													<path
														clipRule="evenodd"
														d="M.222.375A1 1 0 0 1 1.628.22l4.375 3.5 4.375-3.5a1 1 0 1 1 1.25 1.562l-5 4a1 1 0 0 1-1.25 0l-5-4A1 1 0 0 1 .222.375Z"
													></path>
												</svg>
											</span>
										</div>
									</div>
									<div className="top-full shadow-10bottom absolute left-0 w-full bg-white rounded-md shadow z-40 mt-1.5">
										<ul className="py-2 max-h-[455px] overflow-y-auto">
											<li className="flex">
												<div
													role="button"
													className="cursor-pointer hover:bg-basic-50 sm:px-9 px-2.5 w-full py-2 break-words"
												>
													Квартира
												</div>
											</li>
											<li className="flex">
												<div
													role="button"
													className="cursor-pointer hover:bg-basic-50 sm:px-9 px-2.5 w-full py-2 break-words"
												>
													Новостройка
												</div>
											</li>
											<li className="flex">
												<div
													role="button"
													className="cursor-pointer hover:bg-basic-50 sm:px-9 px-2.5 w-full py-2 break-words"
												>
													Снять
												</div>
											</li>
											<li className="flex">
												<div
													role="button"
													className="cursor-pointer hover:bg-basic-50 sm:px-9 px-2.5 w-full py-2 break-words"
												>
													На сутки
												</div>
											</li>
										</ul>
									</div>
								</div>
								<div className="border-basic-100 relative border-r-2 basis-1/6">
									<div
										role="button"
										className="cursor-pointer sm:px-9 py-4 pl-2.5 pr-6"
									>
										<div className="whitespace-nowrap flex items-center justify-between">
											<span>Кол-во комнат</span>
											<span className="ml-auto pl-1.5">
												<svg
													viewBox="0 0 12 6"
													fill="none"
													height="10"
													width="10"
													style={{
														fill: "currentcolor",
													}}
												>
													<path
														clipRule="evenodd"
														d="M.222.375A1 1 0 0 1 1.628.22l4.375 3.5 4.375-3.5a1 1 0 1 1 1.25 1.562l-5 4a1 1 0 0 1-1.25 0l-5-4A1 1 0 0 1 .222.375Z"
													></path>
												</svg>
											</span>
										</div>
									</div>
								</div>
								<div className="border-basic-100 relative border-r-2 basis-1/6">
									<div
										role="button"
										className="cursor-pointer sm:px-9 py-4 pl-2.5 pr-6"
									>
										<div className="flex items-center justify-between">
											<span>Цена</span>
											<span className="ml-auto pl-1.5">
												<svg
													viewBox="0 0 12 6"
													fill="none"
													height="10"
													width="10"
													style={{
														fill: "currentcolor",
													}}
												>
													<path
														clipRule="evenodd"
														d="M.222.375A1 1 0 0 1 1.628.22l4.375 3.5 4.375-3.5a1 1 0 1 1 1.25 1.562l-5 4a1 1 0 0 1-1.25 0l-5-4A1 1 0 0 1 .222.375Z"
													></path>
												</svg>
											</span>
										</div>
									</div>
								</div>
								<div className="border-basic-100 relative w-full basis-3/6">
									<div
										role="button"
										className="cursor-pointer sm:px-9 py-2 pl-2.5 pr-6"
									>
										<div className="relative flex items-center justify-between">
											<input
												name="search"
												className="overflow-ellipsis border-none focus:outline-none h-full w-full py-2.5 placeholder-basic-900 focus:placeholder-transparent"
												placeholder="Укажите город/регион поиска"
												spellCheck="false"
												autoComplete="off"
												maxLength="256"
												value=""
											/>
											<span className="ml-auto pl-1.5">
												<svg
													viewBox="0 0 12 6"
													fill="none"
													height="10"
													width="10"
													style={{
														fill: "currentcolor",
													}}
												>
													<path
														clipRule="evenodd"
														d="M.222.375A1 1 0 0 1 1.628.22l4.375 3.5 4.375-3.5a1 1 0 1 1 1.25 1.562l-5 4a1 1 0 0 1-1.25 0l-5-4A1 1 0 0 1 .222.375Z"
													></path>
												</svg>
											</span>
										</div>
									</div>
								</div>
							</div>
							<div className="flex justify-end">
								<div className="flex h-11">
									<a
										className="focus:outline-none sm:focus-visible:shadow-10bottom cursor-pointer select-none h-full text-basic-50 border-basic-500 hover:bg-basic-500 inline-block mr-3 border rounded-md px-3.75 py-2.25 text-buttonM disabled:text-basic-500"
										type="link"
										href="/belarus/sale/flats/map/"
									>
										<span className="inline-flex items-center">
											<svg
												viewBox="0 0 17 16"
												height="16"
												width="20"
												className="mr-2"
												style={{
													fill: "currentcolor",
												}}
											>
												<path
													fillRule="evenodd"
													clipRule="evenodd"
													d="M4.28.05a.5.5 0 0 1 .36-.03l6.84 1.95L15.33.53A.5.5 0 0 1 16 1v12.5a.5.5 0 0 1-.27.45l-4 2a.5.5 0 0 1-.36.03l-6.85-1.95-3.84 1.44A.5.5 0 0 1 0 15V2.5a.5.5 0 0 1 .28-.45l4-2zM5 13.12l6.45 1.85L15 13.19V1.72l-3 1.13v8.65a.5.5 0 1 1-1 0V2.88L4.55 1.03 1 2.81v11.47l3-1.13V4.5a.5.5 0 0 1 1 0v8.62z"
												></path>
											</svg>
											На карте
										</span>
									</a>
									<a
										className="flex items-center bg-lime-500 rounded-lg px-5 py-2 font-bold text-md text-white"
										type="link"
										href="/belarus/sale/flats/"
									>
										Найти
									</a>
								</div>
							</div>
						</div>
					</form>
				</div>
			</div>
			<div className="container mx-auto">
				<div className="flex flex-wrap py-10 w-full">
					{data.map((apartment) => (
						<div key={apartment.id} className="w-full lg:w-1/3 p-3">
							<Card
								address={apartment.address}
								price={apartment.price}
								imageUrl={apartment.imageUrl}
							/>
						</div>
					))}
				</div>
			</div>
			<Footer />
		</>
	);
}

export default MainPage;
