import React from 'react';
import Styles from './filter.sass';

function Filter() {
	return (
		<div className="main-search">
			<select>
				<option value="1">1-комн. квартира</option>
				<option value="2">2-комн. квартира</option>
			</select>
			<select>
				<option value="1">Дзержинский</option>
				<option value="2">Заволжский</option>
				<option value="2">Кировский</option>
				<option value="2">Красноперекопский</option>
				<option value="2">Ленинский</option>
				<option value="2">Фрунзенский</option>
			</select>
			<select>
				<option value="1">Этаж 1</option>
				<option value="2">Этаж 2</option>
			</select>
			<button className="chief-btn">Найти </button>
		</div>
	)
}

export default Filter;