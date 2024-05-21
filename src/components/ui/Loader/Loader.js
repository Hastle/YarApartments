import React from "react";
import { BiLoaderAlt } from "react-icons/bi";

const Loader = () => {
	return (
		<div className="flex h-full w-full items-center justify-center">
			<BiLoaderAlt className="animate-spin text-green" size="50" />
		</div>
	);
};

export default Loader;
