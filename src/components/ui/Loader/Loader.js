import React from "react";
import { BiLoaderAlt } from "react-icons/bi";

function Loader() {
	return (
		<div className="relative flex h-full w-full items-center justify-center">
			<BiLoaderAlt className="animate-spin text-green" size="50" />
		</div>
	);
}

export default Loader;
