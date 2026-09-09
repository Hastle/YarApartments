import { useMemo } from "react";
import { useFilter } from "../contexts/FilterContext";
import DataAreaList from "../data/DataAreaList";
import DataApartments from "../data/DataApartments";

const useFilterApartments = () => {
	const { filters } = useFilter();

	return useMemo(() => {
		return DataApartments.filter((apartment) => {
			const {
				priceFrom,
				priceTo,
				area,
				rooms,
				sleepingPlaces,
				additional,
			} = filters;

			const selectedRooms = rooms
				? Object.keys(rooms).filter((room) => rooms[room])
				: [];

			const selectedSleepingPlaces = sleepingPlaces
				? Object.keys(sleepingPlaces).filter(
						(place) => sleepingPlaces[place],
					)
				: [];

			if (priceFrom && Number(apartment.priceShort) < Number(priceFrom))
				return false;
			if (priceTo && Number(apartment.priceShort) > Number(priceTo))
				return false;

			const selectedAreaId = DataAreaList.find(
				(item) => item.name === area,
			)?.id;

			if (selectedAreaId && apartment.areaId !== selectedAreaId)
				return false;

			if (
				selectedRooms.length > 0 &&
				!selectedRooms.includes(apartment.room)
			)
				return false;

			if (
				selectedSleepingPlaces.length > 0 &&
				!selectedSleepingPlaces.includes(apartment.sleepingPlaces)
			)
				return false;

			if (additional && additional.noDeposit !== undefined) {
				if (additional.noDeposit && !apartment.noDeposit) return false;
			}

			if (additional && additional.balcony !== undefined) {
				if (additional.balcony && !apartment.balcony) return false;
			}

			if (additional && additional.pets !== undefined) {
				if (additional.pets && !apartment.pets) return false;
			}

			return true;
		});
	}, [filters]);
};
export default useFilterApartments;
