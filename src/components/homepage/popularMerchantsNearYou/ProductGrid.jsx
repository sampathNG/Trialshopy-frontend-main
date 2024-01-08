import React from 'react';
import ProductCard from './ProductCard';

const ProductGrid = ({ products }) => {
	// console.log(products);
	return (
		<div className="flex flex-row justify-start items-start gap-4 lg:gap-14 w-full py-1 pt-0">
			{products?.map((product, key) => (
				<ProductCard key={key} productDetails={product} />
			))}
		</div>
	);
};

export default ProductGrid;
