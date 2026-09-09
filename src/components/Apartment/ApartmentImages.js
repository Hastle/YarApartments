import React from "react";

const ApartmentImages = ({ images, title }) => {
	return (
		<div className="overflow-x-auto md:flex md:flex-col md:overflow-x-hidden">
			<div className="flex h-[300px] max-w-full gap-4 md:grid md:grid-cols-4 md:grid-rows-2 lg:h-[500px]">
				<div className="w-full flex-shrink-0 md:col-span-2 md:row-span-2 md:w-auto">
					{images.slice(0, 1).map((imageUrl, index) => (
						<img
							key={index}
							src={imageUrl}
							alt={`${title} ${index + 1}`}
							className="h-full w-full object-cover"
						/>
					))}
				</div>
				{images.slice(1, 5).map((imageUrl, index) => (
					<div
						key={index}
						className="w-full flex-shrink-0 md:col-span-1 md:row-span-1 md:w-auto"
					>
						<img
							src={imageUrl}
							alt={`${title} ${index + 2}`}
							className="h-full w-full object-cover"
						/>
					</div>
				))}
			</div>
		</div>
	);
};

export default ApartmentImages;
