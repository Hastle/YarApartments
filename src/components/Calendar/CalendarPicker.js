import React, { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import dayjs from "dayjs";
import "dayjs/locale/ru";
import Button from "../ui/Button/Button";
import useOutsideAlerter from "../../hooks/useOutsideAlerter";

const CalendarPicker = ({
	className = "",
	selectedRange,
	setSelectedRange,
}) => {
	const [isCalendarOpen, setIsCalendarOpen] = useState(false);
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
			return selectedRange.start.format("DD.MM.YYYY");
		} else {
			return `${selectedRange.start.format(
				"DD.MM.YYYY",
			)} - ${selectedRange.end.format("DD.MM.YYYY")}`;
		}
	};

	return (
		<Button
			onClick={toggleCalendar}
			className={`relative inline-flex h-10 items-center justify-center rounded-lg border border-black bg-light px-4 py-2 outline-none ${
				className ? className : ""
			}`}
			disabled={isCalendarOpen}
		>
			{renderSelectedRange()}

			{isOpen && (
				<div
					ref={ref}
					className="absolute left--1/2 top-10 z-10 bg-light"
					onClick={handleModalClick}
				>
					<Calendar
						selectedRange={selectedRange}
						setSelectedRange={setSelectedRange}
					/>
				</div>
			)}
		</Button>
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
			console.log("Новый диапазон:", { start: day, end: day });
			setSelectedRange({ start: day, end: day });
		} else if (day.isBefore(selectedRange.start, "day")) {
			console.log("Изменение начальной даты:", {
				start: day,
				end: selectedRange.end,
			});
			setSelectedRange({ start: day, end: selectedRange.end });
		} else if (day.isAfter(selectedRange.end, "day")) {
			console.log("Изменение конечной даты:", {
				start: selectedRange.start,
				end: day,
			});
			setSelectedRange({ start: selectedRange.start, end: day });
		} else {
			console.log("Очистка диапазона");
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

		while (day.isBefore(endDay, "day") || day.isSame(endDay, "day")) {
			days.push(day);
			day = day.add(1, "day");
		}

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

						const isPastDay = day.isBefore(dayjs().startOf("day"));

						const isOtherMonth =
							day.month() !== currentMonth.month();

						const isFutureDay = day.isAfter(dayjs(), "day");

						const isPartOfSelectedRange =
							selectedRange &&
							isBetweenInclusive(
								day,
								selectedRange.start,
								selectedRange.end,
							);

						return (
							<td
								key={dayIndex}
								onClick={() => handleDayClick(day)}
								onMouseEnter={() => handleDayHover(day)}
								className={`px-2 py-2 text-center ${
									(isOtherMonth && !isPartOfSelectedRange) ||
									isPastDay
										? "cursor-not-allowed text-gray-400"
										: "cursor-pointer"
								} ${
									isOtherMonth && !isPartOfSelectedRange
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
											(isInRange && "bg-blue-200")
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
