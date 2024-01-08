import React from 'react';
import BrandCard from './BrandCard';

const BrandGrid = ({ products }) => {
	// console.log(products);
	return (
		<div className="flex flex-row justify-start items-start gap-4 lg:gap-14 w-full py-1 pt-0">
			{products?.map((product, key) => (
				<BrandCard key={key} productDetails={product} />
			))}
		</div>
	);
};

export default BrandGrid;
