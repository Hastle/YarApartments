import { useEffect, useState, useRef } from "react";

export default function useOutsideAlerter(initialIsVisible) {
	const [isOpen, setIsOpen] = useState(initialIsVisible);
	const ref = useRef(null);

	const handleClickOutside = (e) => {
		if (ref.current && !ref.current.contains(e.target)) {
			setIsOpen(false);
		}
	};
	useEffect(() => {
		document.addEventListener("click", handleClickOutside, true);
		return () => {
			document.removeEventListener("click", handleClickOutside, true);
		};
	});
	return { ref, isOpen, setIsOpen };
}
