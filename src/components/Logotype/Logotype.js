import React from "react";
import { NavLink } from "react-router-dom";

function Logotype() {
	return (
		<NavLink
			to="/"
			className="inline-flex text-white text-xl hover:text-green flow"
		>
			YarApartments.
		</NavLink>
	);
}

export default Logotype;
// .logo
// display: inline-flex
// color: $white
// padding: 10px
// font-size: 1.25rem
// +flow
// &:hover
// color: $green
// +flow
