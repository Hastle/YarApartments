import React, { createContext, useContext, useState } from "react";

const FilterContext = createContext();

export const useFilter = () => {
	return useContext(FilterContext);
};

export const FilterProvider = ({ children }) => {
	const [filters, setFilters] = useState({});

	const updateFilters = (newFilters) => {
		setFilters((prevFilters) => ({
			...prevFilters,
			...newFilters,
		}));
	};

	const resetFilters = () => {
		setFilters({});
	};

	return (
		<FilterContext.Provider
			value={{ filters, updateFilters, resetFilters }}
		>
			{children}
		</FilterContext.Provider>
	);
};
