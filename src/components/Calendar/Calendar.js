import React, { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import dayjs from "dayjs";
import "dayjs/locale/ru";

const Calendar = () => {
	dayjs.locale("ru");

	const [currentMonth, setCurrentMonth] = useState(dayjs().startOf("month"));

	const handlePrevMonth = () => {
		setCurrentMonth(currentMonth.subtract(1, "month"));
	};

	const handleNextMonth = () => {
		setCurrentMonth(currentMonth.add(1, "month"));
	};

	const renderDaysOfWeek = () => {
		const daysOfWeek = ["ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ", "ВС"];
		return (
			<thead>
				<tr>
					{daysOfWeek.map((day, index) => (
						<th key={index} className="text-gray py-2">
							{day}
						</th>
					))}
				</tr>
			</thead>
		);
	};

	const renderDays = () => {
		const startDay = currentMonth.startOf("month").startOf("week");
		const endDay = currentMonth.endOf("month").endOf("week");
		const days = [];
		let day = startDay;

		while (day.isBefore(endDay, "day")) {
			days.push(day);
			day = day.add(1, "day");
		}

		const weeks = [];
		for (let i = 0; i < days.length; i += 7) {
			weeks.push(days.slice(i, i + 7));
		}

		return (
			<tbody>
				{weeks.map((week, weekIndex) => (
					<tr key={weekIndex}>
						{week.map((day, dayIndex) => (
							<td
								key={dayIndex}
								className={`px-2 py-2 text-center ${
									day.month() !== currentMonth.month()
										? "text-gray-400"
										: ""
								}`}
							>
								{day.format("D")}
							</td>
						))}
					</tr>
				))}
			</tbody>
		);
	};

	const tableHeight = () => {
		const startDay = currentMonth.startOf("month").startOf("week");
		const endDay = currentMonth.endOf("month").endOf("week");
		const daysInMonth = endDay.diff(startDay, "day") + 1;
		const weeksInMonth = Math.ceil(daysInMonth / 7);
		return `${weeksInMonth * 32}px`;
	};

	return (
		<div className="mx-auto max-w-md rounded-lg p-4 shadow-md">
			<div className="mb-4 flex items-center justify-between">
				<button onClick={handlePrevMonth} className="text-gray">
					<FiChevronLeft />
				</button>
				<div>{currentMonth.format("MMMM YYYY")}</div>
				<button onClick={handleNextMonth} className="text-gray">
					<FiChevronRight />
				</button>
			</div>
			<table
				className="w-full border-collapse"
				style={{ height: tableHeight() }}
			>
				{renderDaysOfWeek()}
				{renderDays()}
			</table>
		</div>
	);
};

export default Calendar;
