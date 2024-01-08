import React, { useState } from 'react';
import Image from 'next/image';

const ModelFilter = ({ setSelectedFilters }) => {
	const [filterMenuOpen, setFilterMenuOpen] = useState(false);
	const handleFilterMenuOpen = () => {
		setFilterMenuOpen(!filterMenuOpen);
	};

	const [brandMenuOpen, setBrandMenuOpen] = useState({}); // State to manage the open/close state for each brand

	const handleBrandMenuOpen = (brandName) => {
		setBrandMenuOpen((prevState) => ({
			...prevState,
			[brandName]: !prevState[brandName], // Toggle the open/close state for the clicked brand
		}));
	};

	const brands = [
		{
			name: 'Brand 1',
			products: ['Product A', 'Product B', 'Product C'],
		},
		{
			name: 'Brand 2',
			products: ['Product X', 'Product Y', 'Product Z'],
		},
		{
			name: 'Brand 3',
			products: ['Product I', 'Product II', 'Product III'],
		},
	];

	return (
		<div className="flex flex-col items-center py-2 gap-2 w-full border-b-2 border-gray-300">
			<div className="flex flex-row justify-between w-full">
				<h4 className="font-bold">Model</h4>
				<Image
					className={`transform duration-200 ${
						filterMenuOpen ? 'rotate-90' : ''
					}`}
					onClick={handleFilterMenuOpen}
					src="/images/keyboard_arrow_down.svg"
					width={20}
					height={20}
					alt="SVG map icon"
				/>
			</div>
			<div
				className={`flex flex-col items-start justify-start w-full gap-2 ${
					filterMenuOpen ? '' : 'hidden'
				}`}>
				<div className="flex flex-row items-center justify-between w-full">
					<div className="flex flex-col items-start gap-2.5 w-full text-md lg:text-sm h-[200px] overflow-auto">
						{/* Generating dropdown elements for each brand */}
						{brands.map((brand, brandIndex) => (
							<div key={brandIndex} className="w-full">
								<div
									className="flex flex-row justify-between w-full pl-2.5"
									onClick={() => handleBrandMenuOpen(brand.name)}>
									<p>{brand.name}</p>
									<Image
										src="/images/keyboard_arrow_down.svg"
										width={20}
										height={20}
										alt="SVG map icon"
									/>
								</div>
								{/* Generating dropdown elements for each product in the brand */}
								{brandMenuOpen[brand.name] && (
									<div className="flex flex-col gap-2 w-full pl-5">
										{brand.products.map((product, productIndex) => (
											<div
												key={productIndex}
												className="flex flex-row justify-between w-full pl-5">
												<p>{product}</p>
											</div>
										))}
									</div>
								)}
							</div>
						))}
					</div>
					
				</div>
			</div>
		</div>
	);
};

export default ModelFilter;
