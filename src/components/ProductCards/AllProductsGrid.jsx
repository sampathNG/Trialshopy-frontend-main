import React, { useState } from 'react';
import ProductCard from './ProductCard';
import { useEffect } from 'react';
import axios from 'axios';

export default function AllProductsGrid({ cards, title }) {
	return (
		<>
			<div className="flex flex-col gap-2 my-3">
				<div className="text-2xl font-semibold lg:block">{title}</div>
				<div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
					{cards.map((item, index) => (
						<ProductCard productDetails={item} key={index} />
					))}
				</div>
				{/* <div className="grid px-4 mb-2 overflow-x-auto grid-col-2 grid-container ">
							<div className="grid grid-cols-2 gap-2 py-4 lg:grid-cols-4">
							{cards.map((item, index) => (
									<ProductCard productDetails={item} key={index} />
					           ))}
							</div>
				</div> */}
			</div>
		</>
	);
}
