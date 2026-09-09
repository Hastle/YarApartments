import React, { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import dayjs from "dayjs";
import "dayjs/locale/ru";
import Button from "../ui/Button/Button";
import useOutsideAlerter from "../../hooks/useOutsideAlerter";

const CalendarPicker = () => {
	const [isCalendarOpen, setIsCalendarOpen] = useState(false);
	const [selectedRange, setSelectedRange] = useState(null);
	const { ref, isOpen, setIsOpen } = useOutsideAlerter(isCalendarOpen);

	const toggleCalendar = () => {
		setIsOpen(!isOpen);
	};

	const handleModalClick = (e) => {
		e.stopPropagation();
	};

	const renderSelectedRange = () => {
		if (!selectedRange) {
			return "Выбрать даты";
		} else if (selectedRange.start.isSame(selectedRange.end, "day")) {
			return selectedRange.start.format("D MMMM YYYY");
		} else {
			return `${selectedRange.start.format("D MMMM YYYY")} - ${selectedRange.end.format("D MMMM YYYY")}`;
		}
	};

	return (
		<div>
			<Button onClick={toggleCalendar} className="relative">
				{renderSelectedRange()}

				{isOpen && (
					<div
						ref={ref}
						className="absolute left-0 top-0 z-10 bg-light"
						onClick={handleModalClick}
					>
						<Calendar
							selectedRange={selectedRange}
							setSelectedRange={setSelectedRange}
						/>
					</div>
				)}
			</Button>
		</div>
	);
};

const Calendar = ({ selectedRange, setSelectedRange }) => {
	dayjs.locale("ru");
	const [currentMonth, setCurrentMonth] = useState(dayjs().startOf("month"));
	const [hoveredDay, setHoveredDay] = useState(null);

	const isBetweenInclusive = (date, startDate, endDate) => {
		return (
			date.isSame(startDate) ||
			date.isSame(endDate) ||
			(date.isAfter(startDate) && date.isBefore(endDate))
		);
	};

	const handlePrevMonth = () => {
		setCurrentMonth(currentMonth.subtract(1, "month"));
	};

	const handleNextMonth = () => {
		setCurrentMonth(currentMonth.add(1, "month"));
	};

	const handleDayClick = (day) => {
		const today = dayjs().startOf("day");

		if (day.isBefore(today, "day")) {
			return;
		}

		if (!selectedRange) {
			setSelectedRange({ start: day, end: day });
		} else if (day.isBefore(selectedRange.start, "day")) {
			setSelectedRange({ start: day, end: selectedRange.end });
		} else if (day.isAfter(selectedRange.end, "day")) {
			setSelectedRange({ start: selectedRange.start, end: day });
		} else {
			setSelectedRange(null);
		}
	};

	const handleDayHover = (day) => {
		if (selectedRange && selectedRange.start && !selectedRange.end) {
			setHoveredDay(day);
		} else {
			setHoveredDay(null);
		}
	};

	const renderDays = (currentMonth) => {
		const startDay = currentMonth.startOf("month").startOf("week");
		const endDay = currentMonth.endOf("month").endOf("week");
		const days = [];
		let day = startDay;

		while (day.isBefore(endDay, "day")) {
			days.push(day);
			day = day.add(1, "day");
		}

		const isBetweenInclusive = (date, startDate, endDate) => {
			return (
				date.isSame(startDate) ||
				date.isSame(endDate) ||
				(date.isAfter(startDate) && date.isBefore(endDate))
			);
		};

		const weeks = [];
		for (let i = 0; i < days.length; i += 7) {
			const weekDays = days.slice(i, i + 7);
			weeks.push(
				<tr key={i}>
					{weekDays.map((day, dayIndex) => {
						const isSelectedRangeDay =
							selectedRange &&
							(selectedRange.start.isSame(day, "day") ||
								selectedRange.end.isSame(day, "day") ||
								isBetweenInclusive(
									day,
									selectedRange.start,
									selectedRange.end,
								));

						const isInRange =
							selectedRange &&
							!selectedRange.end &&
							(day.isAfter(selectedRange.start, "day") ||
								day.isSame(selectedRange.start, "day"));

						const isHoveredRange =
							selectedRange &&
							selectedRange.start &&
							hoveredDay &&
							day.isAfter(selectedRange.start, "day") &&
							day.isBefore(hoveredDay, "day");

						return (
							<td
								key={dayIndex}
								onClick={() => handleDayClick(day)}
								onMouseEnter={() => handleDayHover(day)}
								className={`cursor-pointer px-2 py-2 text-center ${
									day.month() !== currentMonth.month()
										? "text-gray-400"
										: (selectedRange &&
												isSelectedRangeDay &&
												(day.isSame(
													selectedRange.start,
													"day",
												) ||
												day.isSame(
													selectedRange.end,
													"day",
												)
													? "rounded bg-black text-white"
													: "bg-grey/10")) ||
											(isHoveredRange && "bg-blue-200") ||
											(isInRange && "bg-blue-200") ||
											""
								}`}
							>
								{day.format("D")}
							</td>
						);
					})}
				</tr>,
			);
		}

		return weeks;
	};

	const tableHeight = (currentMonth) => {
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
				style={{ height: tableHeight(currentMonth) }}
			>
				<thead>
					<tr>
						{["ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ", "ВС"].map(
							(day, index) => (
								<th key={index} className="text-gray py-2">
									{day}
								</th>
							),
						)}
					</tr>
				</thead>
				<tbody>{renderDays(currentMonth)}</tbody>
			</table>
		</div>
	);
};

export default CalendarPicker;
