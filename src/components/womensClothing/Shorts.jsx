import React from 'react';
import ProductCard from './ProductCard';

const shorts = [
	{
		name: 'Product 1',
		image: 'womenshorts.jpeg',
		description: 'This is the description of Product 1.',
		rating: 4.5,
		numberOfRating: 10,
		price: 19.99,
		discount: 10,
	},
	{
		name: 'Product 2',
		image: 'womenshorts.jpeg',
		description: 'This is the description of Product 2.',
		rating: 4.2,
		numberOfRating: 8,
		price: 29.99,
		discount: 20,
	},
	{
		name: 'Product 3',
		image: 'womenshorts.jpeg',
		description: 'This is the description of Product 3.',
		rating: 4.7,
		numberOfRating: 15,
		price: 39.99,
		discount: 15,
	},
	{
		name: 'Product 4',
		image: 'womenshorts.jpeg',
		description: 'This is the description of Product 4.',
		rating: 4.0,
		numberOfRating: 6,
		price: 49.99,
		discount: 25,
	},
];
const Shorts = () => {
	return (
		<div className="flex flex-col items-start gap-2">
			<h1 className="text-xl font-semibold">Shorts</h1>
			<div className="flex flex-row items-center justify-between gap-8 overflow-auto w-full">
				{shorts.map((item, index) => (
					<ProductCard productDetails={item} key={index} />
				))}
			</div>
		</div>
	);
};

export default Shorts;
